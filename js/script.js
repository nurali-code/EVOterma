$(document).ready(function () {
    $('.btn-menu').on('click', function (e) {
        $('.header-navbar, body, .header-nav, .btn-menu').toggleClass('active');
    })

    $('.btn').each(function () {
        var buttonText = $(this).text();
        var wrappedText = '<span class="btn_w"><span class="btn_i">' + buttonText + '</span></span>';
        $(this).html(wrappedText);
    });

    $('input[type="tel"]').inputmask({ "mask": "+7 (999)-999-99-99" });

    /*-------------------------------------------------end*/

    function hideModals() {
        $('.modal').fadeOut();
        $('.header-navbar, body, .header-nav, .btn-menu').removeClass('active');

    };

    $(function () {
        function showModal(id) {
            $('body').addClass('active');
            $(id).fadeIn(300);
        }

        $('[data-modal]').on('click', function (e) {
            e.preventDefault();
            showModal('#' + $(this).attr("data-modal"));
        });

        $('.modal__close').on('click', () => { hideModals(); });

        $(document).on('click', function (e) {
            if (!(($(e.target).parents('.modal-content').length) ||
                ($(e.target).parents('.header-nav').length) ||
                ($(e.target).parents('.btn').length) ||
                ($(e.target).parents('.btn__link').length) ||
                ($(e.target).hasClass('btn')) ||
                ($(e.target).hasClass('btn__link')) ||
                ($(e.target).hasClass('btn-menu')) ||
                ($(e.target).hasClass('modal-content'))
            )) { hideModals(); }
        });
    });

    /*---------------------------------------------------end*/

    $(window).scroll(function () {
        var header = $('header'), parentElement = header.parent();
        if ($(this).scrollTop() > 200) {
            header.addClass('fixed');
            parentElement.css('padding-top', header.outerHeight());
        } else { header.removeClass('fixed'); parentElement.css('padding-top', 0); }
    });

    $('.dropdown-btn').on('click', function (e) {
        var dCont = $(this).next('.dropdown-content');
        var dParent = $(this).parents()[1];
        $(dParent).find('.dropdown-btn').not($(this)).removeClass('active');
        $(this).addClass('active');
        $(dParent).find('.dropdown-content').not($(dCont)).slideUp();
        $(this).next('.dropdown-content').slideDown();
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
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    slidesToShow: 2,
                }
            },
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
            {
                breakpoint: 1000,
                settings: "unslick"
            },
        ]

    });

    gsap.registerPlugin(ScrollTrigger);

    if ($('section').hasClass('blockquote')) {
        $('.blockquote .anim_fade').each(function () {
            var text = $(this).text();
            var words = text.split(/\s+/);
            var wrappedWords = $.map(words, function (word) {
                if (word.trim() !== '') {
                    // Проверяем, похоже ли слово на "EVOterma"
                    var highlightedWord = (word.toLowerCase() === 'evoterma') ? '<span><mark>EVO</mark>terma </span>' : '<span>' + word + '</span>';
                    return highlightedWord;
                } else {
                    return '<span>&nbsp;</span>';
                }
            });
            $(this).html(wrappedWords.join(' '));
        });

        var bItems = $('.blockquote .anim_fade span');
        bItems.each(function (ind, item) {
            gsap.set(item, { opacity: 0.2 });
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "50% 70%",
                    end: "100% 50%",
                    scrub: 1,
                }
            }); tl.to(item, { opacity: 1, duration: 1 });
        });

    }

    if ($('section').hasClass('construction')) {
        var items = document.querySelectorAll('.construction-item');
        items.forEach(function (item) {
            gsap.set(item, { opacity: 0.3 });
            var timeline22 = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "10% 70%",
                    end: "100% 60%",
                    scrub: 1,
                }
            });
            timeline22.to(item, { opacity: 1, duration: 1 });
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
    }

    if ($('div').hasClass('galery')) {
        var galery = document.querySelector('.galery');
        var galery_wrap = document.querySelector('#galery_wrap');
        var imgItems = $('#galery_wrap img');
        var totalWidth = 0;
        imgItems.each(function () {
            totalWidth += ($(this).width() + 25);
        });
        var paddingLeftValue = parseFloat(window.getComputedStyle(galery, null).getPropertyValue('padding-left'));
        totalWidth -= ($(window).innerWidth() - paddingLeftValue);
        gsap.set(galery_wrap, { x: 0, });
        var timeline = gsap.timeline({
            scrollTrigger: {
                trigger: galery_wrap,
                start: "10% 90%",
                end: "100% 10%",
                endTrigger: "#galery_wrap",
                // markers: true,
                scrub: 1,
            }
        });
        timeline.to(galery_wrap, { x: -totalWidth, duration: 1 });
    }

    if ($('div').hasClass('control') && $(window).innerWidth() >= 700) {
        var control = $("#control");
        var control11 = $("#control11");
        var control1 = $("#control1");
        var control2 = $("#control2");

        gsap.set(control, {});
        var timeline1 = gsap.timeline({
            scrollTrigger: {
                trigger: control,
                pin: true,
                start: "0% 20%",
                end: "100% 0%",
                endTrigger: "#control",
                scrub: 1,
            }
        }); timeline1.to(control, {});

        gsap.set(control11, {});
        var timeline1 = gsap.timeline({
            scrollTrigger: {
                trigger: control11,
                start: "top 150%",
                end: "top 30%",
                endTrigger: "#control11",
                scrub: 1,
                toggleClass: { targets: control11, className: "active" }
            }
        });
        timeline1.to(control11, {});

        gsap.set(control1, {});
        var timeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: control1,
                start: "0% 34%",
                end: "300% 20%",
                endTrigger: "#control1",
                scrub: 1,
                toggleClass: { targets: control1, className: "active" }
            }
        });
        timeline2.to(control1, {});

        gsap.set(control2, {});
        var timeline3 = gsap.timeline({
            scrollTrigger: {
                trigger: control2,
                start: "180% 20%",
                end: "600px 0%",
                endTrigger: "#control2",
                scrub: 1,
                toggleClass: { targets: control2, className: "active" }
            }
        });
        timeline3.to(control2, {});



    }


});

