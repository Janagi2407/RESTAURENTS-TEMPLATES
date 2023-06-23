
$(document).ready(function () {

    // menu-iten active
    $(".nav-item .nav-link").click(function () {
        $(".nav-item .nav-link").removeClass("active");
        $(this).addClass("active");
    });

    // serch-box
    $(".search-toggle").click(function () {
        $(".search-box").toggleClass("show");
    });

    // animate
    new WOW().init();


    // count
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $("#carousel1").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 20,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },

            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // scroll top

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".to-top").addClass("active");
        } else {
            $(".to-top").removeClass("active");
        }
    });

    $(".to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });



});





