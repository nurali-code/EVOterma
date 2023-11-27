$(document).ready(function () {
    $('.btn-menu').on('click', function (e) {
        $('.header-navbar, .header-nav, .btn-menu').toggleClass('active');
    })

    $('.dropdown-btn').on('click', function (e) {
        $(this).toggleClass('active');
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
        appendArrows: $('.projects .title-description'),
        nextArrow: '<button type="button" class="slick-next">листай</button>',
        prevArrow: '',
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,

    });
    $('.managers-slider').slick({
        infinite: false,
        arrows: true,
        appendArrows: $('.managers .title-wrap'),
        nextArrow: '<button type="button" class="slick-next">листай</button>',
        prevArrow: '',
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]

    });

    $('.built-slider').slick({
        infinite: false,
        arrows: true,
        appendArrows: $('.built .title-wrap'),
        nextArrow: '<button type="button" class="slick-next">листай</button>',
        prevArrow: '',
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]

    });

    const items = $('.construction-item');
    const range = $('.construction-range');
    const rangeItem = $('.construction-range__item');

    // Функция для обновления расстояния и отображения его при скроле
    function updateDistance() {
        var element = range[0];
        var windowHeight = $(window).height() / 2;
        var rect = element.getBoundingClientRect();
        var distanceFromTop = rect.top;

        if (distanceFromTop <= windowHeight || !distanceFromTop <= 0) {
            console.log('Distance from the top of the viewport: ' + distanceFromTop + ' | ' + windowHeight);
            rangeItem.css('transform', 'translateY(' + distanceFromTop + 'px)');
        }
    }

    // Добавляем обработчик события scroll
    $(window).on('scroll', function () {
        // Вызываем функцию при каждом скроле
        updateDistance();
    });


});

