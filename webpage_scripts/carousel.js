$(document).ready(function() {
	$('.news-carousel').slick({
		dots: false,
		infinite: false,
		arrows: true,
		speed: 300,
		accessibility: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: $('#news .arrow-next'),
		prevArrow: $('#news .arrow-prev'),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	});

	$('.projects-carousel').slick({
		dots: false,
		infinite: false,
		arrows: true,
		speed: 300,
		accessibility: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: $('#projects .arrow-next'),
		prevArrow: $('#projects .arrow-prev'),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	});
});
