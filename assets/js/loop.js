jQuery(function($) {

    /*----------------------/
    /* PAGE LOADER
    /*---------------------*/

    if ($('body.no-preloader').length <= 0) {
        $('body').jpreLoader({
            showSplash: false,
            loaderVPos: "50%"
        });
    }


    /*----------------------/
    /* MAIN NAVIGATION
    /*---------------------*/

    // navbar and logo switch related with scroll position
    $(window).on('scroll', function() {
        if ($(window).width() > 1024) {
            if ($(document).scrollTop() > 150) {
                setNavbarLight();
            } else {
                setNavbarTransparent();
            }
        }
    });

    // navbar and logo switch related with screen width
    function toggleNavbar() {
        if (($(window).width() > 1024) && ($(document).scrollTop() <= 150)) {
            setNavbarTransparent();
        } else {
            setNavbarLight();
        }
    }

    toggleNavbar();

    $(window).resize(function() {
        toggleNavbar();
    });

    /* navbar setting functions */
    function setNavbarLight() {
        $('.navbar').addClass('navbar-light');
        $('.navbar-brand img').attr("src","assets/img/jj-logo-small.png");
    }

    function setNavbarTransparent() {
        $('.navbar').removeClass('navbar-light');
        $('.navbar-brand img').attr("src","assets/img/jj-logo-black.png");
    }

    // hide collapsible menu
    $('.navbar-nav li a').click(function() {
        if ($(this).parents('.navbar-collapse.collapse').hasClass('in')) {
            $('#main-nav').collapse('hide');
        }
    });

    $('#main-nav').localScroll({
        duration: 1000,
        easing: 'easeInOutExpo'
    });

    $('.hero-buttons').localScroll({
        duration: 1000,
        easing: 'easeInOutExpo'
    });


    /*----------------------/
    /* SCROLL TO TOP
    /*---------------------*/

    if ($(window).width() > 992) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('.back-to-top').fadeIn();
            } else {
                $('.back-to-top').fadeOut();
            }
        });

        $('.back-to-top').click(function(e) {
            e.preventDefault();

            $('body, html').animate({
                scrollTop: 0
            }, 800, 'easeInOutExpo');
        });
    }

    /*----------------------/
    /* TOOLTIP
    /*---------------------*/

    if ($(window).width() > 1024) {
        $('body').tooltip({
            selector: "[data-toggle=tooltip]",
            container: "body"
        });
    }

});
