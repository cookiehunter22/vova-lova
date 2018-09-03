
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
let lastScrollTop = 0;

$(window).scroll(setNavClass);

$(document).ready(setNavClass);