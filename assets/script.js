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
	console.log('SUBMIT');

	$.ajax({
		type: 'POST',
		url: '/contact',
		dataType: 'json',
		data: {
			name: $('form#contacts').find('input')[0].value,
			email: $('form#contacts').find('input')[1].value,
			message: $('form#contacts')
				.find('textarea')
				.val(),
		},
		contentType: 'application/x-www-form-urlencoded',
		success: function () {
			console.log('Succes');
		},
		error: function (req, status, err) {
			console.log('something went wrong', status, err);
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
