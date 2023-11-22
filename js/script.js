$(document).ready(function () {
    $('.btn-menu').on('click', function (e) {
        $('.header-navbar, .header-nav, .btn-menu').toggleClass('active');
    })

    $('.dropdown').on('click', function (e) {
        $(this).next('.dropdown-content').slideToggle();
    })

    $('.projects-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        swipeToSlide: true,
        variableWidth: true,

    });

});

