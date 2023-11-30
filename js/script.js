$(document).ready(function () {
    $('.btn-menu').on('click', function (e) {
        $('.header-navbar, .header-nav, .btn-menu').toggleClass('active');
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

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
        slidesToShow: 2,
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

    

    gsap.registerPlugin(ScrollTrigger);

    var items = document.querySelectorAll('.construction-item');

    items.forEach(function (item) {
        gsap.set(item, { opacity: 0.3 });
        var timeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "10% 70%",
                end: "100% 60%",
                scrub: 1,
            }
        });
        timeline2.to(item, { opacity: 1, duration: 1 });
    });

    var rageItem = $("#range__item");
    gsap.set(rageItem, { opacity: 1, x: -9, });
    var timeline = gsap.timeline({
        scrollTrigger: {
            trigger: rageItem,
            start: "60% 70%",
            pin: true,
            end: "bottom 70%",
            endTrigger: "#range",
            scrub: 1,
        }
    });
    timeline.to(rageItem, { opacity: 1, duration: 1 });









});

