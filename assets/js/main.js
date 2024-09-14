


(function ($) {
    "use strict";

    // Mobile Navigation toggle
    $('.icon').on('click', function () {
        // $('.mobile-nav').toggle('slow')
        $('.mobile-nav').slideToggle('slow')

        
        
    })

    // Breaking News Slider
    $('.breaking-news-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
   
})(jQuery);