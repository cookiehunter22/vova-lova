
function setNavClass(){
    let screenTop = $(document).scrollTop();
    let video = $('.video').height();
    const dif = video - screenTop;
    let st = $(this).scrollTop();
    const up = st > lastScrollTop ? false : true;
    if(dif >= 100) {
        $('.navigation').addClass('top');
        $('.navigation').css('opacity', 1)
        
    } else {
        // $('.navigation').removeClass('top').addClass('down');
        $('.navigation').removeClass('top');
        $('.navigation').css('opacity', 1 - dif * 0.01)
        
    }

    lastScrollTop = st;
}

$('.year-controls').click(function(){
    $('.year-controls').removeClass('active');
    $(this).addClass('active');
    const filterYear = $(this).data('filter');
    $('.projects-carousel').slick('slickUnfilter');
    if (filterYear == 'all') {
        return;
    }

    $('.projects-carousel').slick('slickFilter', function(){
        return $(this).data('year') == filterYear;
    });
    
});

$('.nav-link').click(function(){
    $('.navbar-collapse').collapse('hide');
})

let lastScrollTop = 0;

$(window).scroll(setNavClass);

$(document).ready(setNavClass);