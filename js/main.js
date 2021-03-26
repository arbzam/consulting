$(document).ready(function() {
    $('.slider-text , .h-25').css({ 'transform': 'translateY(20px)', 'transition': '1s ease' });
    new WOW().init();
})

$('.slider').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

function myFunction() {
    var preloader = document.getElementById('loading');
    preloader.style.display = 'none';
}

jQuery(document).ready(function() {
    //   insert back to top button dynamicly
    $("#backToTop").append('<a class="backToTop" href="javascript:void(null);" style="display: none;"><i class="fa fa-angle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
    var $window = $(window);
    var distance = 80;
    // scroll
    $window.scroll(function() {
        // header
        if ($window.scrollTop() >= distance) {
            $(".backToTop").fadeIn();
        } else {
            $(".backToTop").fadeOut();
        }
    });

    $('.backToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
})