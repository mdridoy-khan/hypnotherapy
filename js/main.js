(function ($) {
"use strict";

/*---------------------------------------------------------------------------------------
    Data Background Active
-----------------------------------------------------------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });


    $(function() {
      $('.chart').easyPieChart({
        size:180,
        barColor: "#65908f",
        scaleColor: false,
        lineWidth:5,
        trackColor:"#F6F6F6",
        lineCap: "circle",
        animate:1000,
      });
     });
     $(function() {
      $('.chart2').easyPieChart({
        size:180,
        barColor: "#F9B45C",
        scaleColor: false,
        lineWidth:5,
        trackColor:"#F6F6F6",
        lineCap: "circle",
        animate:1000,
      });
     });
/*---------------------------------------------------------------------------------------
    Sticky Header Active
-----------------------------------------------------------------------------------------*/
    // sticky Header layout 1
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
          $("#header-sticky").removeClass("sticky");
        } else {
          $("#header-sticky").addClass("sticky");
        }
    }); 
    // sticky Header layout 2, 3
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
          $("#header-sticky-2").removeClass("sticky");
        } else {
          $("#header-sticky-2").addClass("sticky");
        }
    }); 
    // sticky Header Inner page
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
          $("#header-sticky-3").removeClass("sticky");
        } else {
          $("#header-sticky-3").addClass("sticky");
        }
    });
	
/*---------------------------------------------------------------------------------------
    Slick Slider Active
-----------------------------------------------------------------------------------------*/  


// mainSlider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: true,
            fade: true,
            arrows: true,
            pauseOnHover:false,
            prevArrow:'<i class="fas fa-chevron-left"></i>',
            nextArrow:'<i class="fas fa-chevron-right"></i>',
            responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            }
          ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();
	
	
	// skill area slider active
	
    // Blog post slider active
    $('.testimonial-active').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplaySpeed: 10000,
        prevArrow:'<i class="fas fa-chevron-left"></i>',
        nextArrow:'<i class="fas fa-chevron-right"></i>',
    });

    // brand slider active
    $('.slider-active-wrapper').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 2,
        dots: false,
        arrows: false,
        autoplaySpeed: 1000,
        responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 993,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

/*---------------------------------------------------------------------------------------
    Magnific popup Active

/*---------------------------------------------------------------------------------------
    Scroll to top Active
-----------------------------------------------------------------------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<span><i class="fa-solid fa-angle-up"></i></span>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
/*---------------------------------------------------------------------------------------
    AOS Animation Active
-----------------------------------------------------------------------------------------*/
    if ($("[data-aos]").length) {
        AOS.init({
            duration: 1000,
            mirror: true
        });
    }
/*---------------------------------------------------------------------------------------
    Wow Animation Active
-----------------------------------------------------------------------------------------*/ 

    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

/*start GOOGLE MAP*/
function initMap() {
  // The location of Uluru
  const uluru = { lat: 23.8103, lng: 90.4125 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: uluru,
      flat: true,
      styles: [ { "stylers": [ { "hue": "#4bd6bf" }, { "gamma": "1.58" } ] } ],
          mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
/*END GOOGLE MAP*/	
/*---------------------------------------------------------------------------------------
    Counter Active
-----------------------------------------------------------------------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

/*---------------------------------------------------------------------------------------
    Side-bar Active
-----------------------------------------------------------------------------------------*/


})(jQuery); 