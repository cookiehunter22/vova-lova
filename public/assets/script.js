let lastScrollTop = 0;

function setNavClass () {
	let screenTop = $(document).scrollTop();
	let video = $('.video').height();
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

$('.nav-link').click(function () {
	$('.navbar-collapse').collapse('hide');
});

$(window).scroll(setNavClass);

$(document).ready(function () {
	setNavClass();
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
