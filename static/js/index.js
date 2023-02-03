$(document).ready(function () {
    new Swiper('.reviews-swiper', {
        slidesPerView: 2,
        spaceBetween: 80,
        autoplay:{delay: 2100}
    })
    new Swiper('.rez-swiper', {
        autoplay:{delay: 2000},
        slidesPerView: 2,
        spaceBetween: 80
    })
})
