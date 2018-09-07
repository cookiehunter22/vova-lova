let lastScrollTop = 0;

function setNavClass () {
	let screenTop = $(document).scrollTop();
	let video
		= $('.video').height()
		|| $('.docs').height()
		|| $('.image-overlay')
			.first()
			.height();
	const dif = video - screenTop;
	let st = $(this).scrollTop();
	if (dif >= 100) {
		$('.navigation').addClass('top');
		$('.navigation').css('opacity', 1);
	} else {
		// $('.navigation').removeClass('top').addClass('down');
		$('.navigation').removeClass('top');
		$('.navigation').css('opacity', 1 - dif * 0.01);
	}

	lastScrollTop = st;
}

function setActiveLink () {
	var windscroll = $(window).scrollTop();
	var topSection
		= $('.video').height()
		|| $('.docs').height()
		|| $('.image-overlay')
			.first()
			.height();
	if (windscroll >= 100) {
		$('.scroll-section').each(function (i) {
			if ($(this).position().top <= windscroll + 100) {
				$('.nav-link').removeClass('active');

				$('.nav-link')
					.eq(i)
					.addClass('active');
			}
		});
	} else {
		$('.nav-link').removeClass('active');
		$('.nav-link:first').addClass('active');
	}
}

$('.year-controls').click(function () {
	$('.year-controls').removeClass('active');
	$(this).addClass('active');
	const filterYear = $(this).data('filter');
	$('.projects-carousel').slick('slickUnfilter');
	if (filterYear == 'all') {
		return;
	}

	$('.projects-carousel').slick('slickFilter', function () {
		return $(this).data('year') == filterYear;
	});
});
$('form').on('submit', function (event) {
	event.preventDefault();

	submitForm();

	$.ajax({
		type: 'POST',
		url: '/contact',
		data: {
			name: $('form').find('input')[0].value,
			email: $('form').find('input')[1].value,
			message: $('form')
				.find('textarea')
				.val(),
		},
		contentType: 'application/x-www-form-urlencoded',
		success: function () {
			setTimeout(submitForm, 2500);
			setTimeout(successForm, 1000);
			setTimeout(successForm, 2600);

			$('form')
				.find('input[type=text], input[type=email], textarea')
				.val('');
		},
		error: function (res, status, err) {
			setTimeout(submitForm, 2500);
			setTimeout(failForm, 1000);
			setTimeout(failForm, 2600);
		},
	});
	return false;
});

$('.nav-link').click(function (e) {
	$('.navbar-collapse').collapse('hide');
	$('.nav-link').removeClass('active');
	$(this).addClass('active');
});

$('.slide').click(function (e) {
	if (window.location.pathname !== '/') {
		return;
	}
	e.preventDefault();
	var aid = $(this)
		.attr('href')
		.split('/')[1];
	$('html,body').animate({ scrollTop: $(aid).offset().top }, 'slow');
});

$(window).scroll(function () {
	setNavClass();
	var path = window.location.pathname;
	if (path === '/') setActiveLink();
});

$(document).ready(function () {
	setNavClass();
	setActiveLink();

	// set right nav link
	var path = window.location.pathname;
	if (path === '/documents') {
		$('.nav-link').removeClass('active');
		$('.nav-link:last').addClass('active');
	} else if (path === '/projects') {
		$('.nav-link').removeClass('active');
		$('.nav-link')
			.eq(2)
			.addClass('active');
	} else if (path.includes('news')) {
		$('.nav-link').removeClass('active');
		$('.nav-link')
			.eq(5)
			.addClass('active');
	}
});

function submitForm () {
	$('.contacts .overlay').toggleClass('hide');
}
function successForm () {
	$('.circle-loader').toggleClass('load-complete');
	$('.checkmark').toggle();
}

function failForm () {
	$('.circle-loader').toggleClass('load-complete');
	$('.circle-loader').toggleClass('fail');
	$('.close-icon').toggleClass('show');
}

function test () {
	submitForm();
	setTimeout(submitForm, 2500);
	setTimeout(successForm, 1000);
	setTimeout(successForm, 2600);
}
