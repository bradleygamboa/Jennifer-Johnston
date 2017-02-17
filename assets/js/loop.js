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
        $('.navbar-brand img').attr('src', 'assets/img/jj-logo-black.png');
    }

    function setNavbarTransparent() {
        $('.navbar').removeClass('navbar-light');
        $('.navbar-brand img').attr('src', 'assets/img/jj-logo-white.png');
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
    /* HERO UNIT SUPERSIZED
    /*---------------------*/

    if ($('.slideshow').length > 0) {
        $.supersized({

            // Functionality		
            autoplay: 1, // Slideshow starts playing automatically
            slide_interval: 3000, // Length between transitions
            transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
            transition_speed: 1000, // Speed of transition

            // Components
            slide_links: 'blank', // Individual links for each slide (Options: false, 'num', 'name', 'blank')
            thumb_links: 0, // Individual thumb links for each slide
            slides: [ // Slideshow Images
                { image: 'assets/img/sliders/jenn1.jpg', title: '<div class="hero-text"><h2 class="hero-heading">Jennifer Johnston</h2><p>Makeup Editorial</p></div>', thumb: '', url: '' },
                { image: 'assets/img/sliders/jenn2.jpg', title: '<div class="hero-text"><h2 class="hero-heading">&nbsp;</h2><p>Bridal Editorial</p></div>', thumb: '', url: '' },
                { image: 'assets/img/sliders/jenn3.jpg', title: '<div class="hero-text"><h2 class="hero-heading">&nbsp;</h2><p>Hair Editorial</p></div>', thumb: '', url: '' },
                { image: 'assets/img/sliders/jenn6.jpg', title: '<div class="hero-text"><h2 class="hero-heading">&nbsp;</h2><p>Commercial Editorial</p></div>', thumb: '', url: '' }
            ],
        });

        $(".fa-pause, .fa-play").click(function() {
            $(this).toggleClass("fa-pause fa-play");
        });
    }


    /*----------------------/
    /* PARALLAX
    /*---------------------*/

    $('.full-width-parallax').parallax(0, 0.1);

    function setParallax() {
        if ($(window).width() > 1024) {
            $('.full-width-parallax').parallax(0, 0.1);
        }
    }

    setParallax();

    $(window).resize(function() {
        setParallax();
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
