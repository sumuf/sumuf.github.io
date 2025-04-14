$(document).ready(function() {
    $(".screenshot-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            }
        }
    });
});