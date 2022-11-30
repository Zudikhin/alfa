$(document).ready(function () {
    "use strict";

    var mode = localStorage.getItem('mode');

    if(mode) {
        $('body').addClass(mode);
    }
            
    $(".header_block_right_checkbox").click(function() {
        $("body").toggleClass("dark_theme");
        if($("body").hasClass("dark_theme")) {
            localStorage.setItem('mode', 'dark_theme');
        } else {
            localStorage.setItem('mode', null);
        }
    });
    
    $(".header_block_right_drop").click(function() {
      $(".back_modal").addClass("active");
      $(".dropdown_modal").addClass("active");
      $("body").addClass("scroll");
    });

    $(".dropdown_modal_close").click(function() {
      $(".back_modal").removeClass("active");
      $(".dropdown_modal").removeClass("active");
      $("body").removeClass("scroll");
    });

    $(".back_modal").click(function() {
      $(".back_modal").removeClass("active");
      $(".dropdown_modal").removeClass("active");
      $("body").removeClass("scroll");
    });

    $('.main_block_slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        cssEase: 'linear',
        prevArrow: $('.main_block_prev'),
        nextArrow: $('.main_block_next')
    });

    $('.projects_wrap_slider').slick({
        dots: false,
        infinite: true,
        arrows: true,
        dots: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        prevArrow: $('.projects_wrap_prev'),
        nextArrow: $('.projects_wrap_next')
    });

    $('.news_block_slider_block').slick({
        dots: false,
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 3,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        prevArrow: $('.news_block_slider_prev'),
        nextArrow: $('.news_block_slider_next'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                fade: true,
                slidesToShow: 1
              }
            }
        ]
    });

    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });


});