// import $ from 'jquery';

// import '../css/index.css';

// import Swiper from 'swiper';


const _dir = $('html').attr('dir');
const _isRtl = (_dir === 'rtl');

(( 
    ($) => {
        const swiper = new Swiper('.main-swiper', {     
        });
    }
)
    (jQuery));


    var swiper = new Swiper(".brands-swiper", {
        slidesPerView: 4,
        spaceBetween: 24,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".partners-swiper", {
        slidesPerView: 6,
        spaceBetween: 10,
        centeredSlides: false,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      });

      $(document).ready(function () {
        const firstStory = $(".story-title").first();
        const firstContent = firstStory.closest(".story-card").find(".story-content");
        $(".story-content").hide(); 
        firstStory.addClass("open"); 
        firstContent.show(); 
    
        $(".story-title").click(function () {
            const btn = $(this);
            const stories = $(".story-title");
            const allContents = $(".story-content");
            const content = btn.closest(".story-card").find(".story-content");
    
            if (!btn.hasClass("open")) {
                stories.removeClass("open"); 
                allContents.slideUp(); 
                
                btn.addClass("open"); 
                content.slideDown(); 
            }
        });
    });
    