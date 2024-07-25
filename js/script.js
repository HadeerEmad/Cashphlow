$(window).on('load', function() {
    // PAGE LOADER
    $('.pre-load').stop().animate({ opacity: 0 }, 500, function() {
        $('.pre-load').css({ 'display': 'none' });
        $('body').css({ 'overflow-y': 'auto' });
        // animateBox();
    });

    let testmonialSlider = $('.owl-carousel');
    if(testmonialSlider.length) {
        testmonialSlider.owlCarousel({
            items: 1,
            margin: 0,
            nav: true,
            loop: true,
            dots: false,
            center: false,
            autoplay: true,
            smartSpeed: 1500,
            autoplayTimeout: 5500,
            autoplayHoverPause: true,
            navText: ['<i class="fa fa-arrow-left-long mx-2 fs-6"></i>', '<i class="fa fa-arrow-right-long mx-2 fs-6"></i>']
        });
    }
});

$(function() {

    $(window).scroll(function() {
        animateBox();

        if($(this).scrollTop() > 20) {
            $('#mainNavbar').addClass('position-fixed');
        }else {
            $('#mainNavbar').removeClass('position-fixed');
        }
    });

    $('.dropdown').on("mouseenter", () => {
        $(".dropdown > a").addClass('show')
        $(".dropdown > a").attr("aria-expanded","true");
        $(".dropdown .dropdown-menu").attr("data-bs-popper","none");
        $(".dropdown .dropdown-menu").addClass('show')
    })

    $('.dropdown').on("mouseleave", () => {
        $(".dropdown > a").removeClass('show')
        $(".dropdown > a").attr("aria-expanded","false");
        $(".dropdown .dropdown-menu").removeAttr("data-bs-popper","none");
        $(".dropdown .dropdown-menu").removeClass('show')
    })

});

function animateBox() {
    let scrollVar = $(document).scrollTop();

    $('.animate-box').each(function() {
        let boxVal = $(this).offset().top - $(window).height() + 50;

        if (scrollVar > boxVal) {
            if (!$(this).hasClass('animated')) {

                if ($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                } else if ($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                } else {
                    $(this).addClass('animated fadeInUp');
                }

            }
        }
    });
}