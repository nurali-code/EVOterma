$(document).ready(function () {
    $('.btn-menu').on('click', function (e) {
        $('.header-navbar, .header-nav, .btn-menu').toggleClass('active');
    })

    $('.dropdown').on('click', function (e) {
        $(this).next('.dropdown-content').slideToggle();
    })
    $('.services__heading').hover(
        function () {
            $('.services__heading').removeClass('active');
            $(this).addClass('active');
        }
    );

    $('.projects-slider').slick({
        infinite: false,
        arrows: true,
        appendArrows: $('.title-description'),
        nextArrow: '<button type="button" class="slick-next">листай</button>',
        prevArrow: '',
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,

    });

});

