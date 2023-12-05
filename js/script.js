$(document).ready(function () {
    $('.btn-menu').on('click', function (e) {
        $('.header-navbar, .header-nav, .btn-menu').toggleClass('active');
    })

    $('.btn').each(function () {
        var buttonText = $(this).text();
        var wrappedText = '<span class="btn_w"><span class="btn_i">' + buttonText + '</span></span>';
        $(this).html(wrappedText);
    });

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
    }

    if ($('div').hasClass('control')) {
        var control = $("#control");
        gsap.set(control, { opacity: 1, x: 0, });
        var timeline = gsap.timeline({
            scrollTrigger: {
                trigger: control,
                pin: true,
                start: "10% 20%",
                end: "100% 0%",
                endTrigger: "#control",
                scrub: 1,
            }
        });
        timeline.to(control, { opacity: 1, duration: 1 });



    }


});

