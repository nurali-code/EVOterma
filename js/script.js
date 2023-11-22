$(document).ready(function () {
    $('.btn-menu').on('click', function (e) {
        $('.header-navbar, .header-nav, .btn-menu').toggleClass('active');
    })

    $('.dropdown').on('click', function (e) {
        $(this).next('.dropdown-content').slideToggle();
    })

});

