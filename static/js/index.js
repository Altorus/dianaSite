$(document).ready(function () {
    new Swiper('.reviews-swiper', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 80,
        autoplay: {delay: 2100},
        breakpoints: {
            820: {
                slidesPerView: 2,
            }
        }
    })
    new Swiper('.rez-swiper', {
        loop: true,
        autoplay: {delay: 2000},
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            820: {
                slidesPerView: 2,
                spaceBetween: 80
            }
        }
    })

    $('a[href^="#"]').click(function () {
        let anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 0);
    });

})

$(window).on('load', function() {
    $("#preloader").fadeTo(3000,1).fadeOut(1000);
})
