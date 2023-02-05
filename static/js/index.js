$(document).ready(function () {
    new Swiper('.reviews-swiper', {
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
