document.body.onload = function() {
  
  setTimeout(function() {

    var preloader = document.getElementById('preloader');
    if( !preloader.classList.contains('hidden') )
    {
      preloader.classList.add('hidden');
    }
  }, 600);
}


$(function(){


  $('.portfolio__work').tilt({
    maxTilt: 20,
    perspective: 1000,
    });
 
    $(".menu__item-link, .top__link, .footer__up").on("click", function (e) {
      e.preventDefault();
      $('.header__btn').removeClass('header__btn--active');
    $('.menu__list').removeClass('menu__list--active');
    $('body').removeClass('hidden');
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({
          scrollTop: top
      }, 1200);
  });

    $('.header__btn').on('click', function(){
    $('.header__btn').toggleClass('header__btn--active');
    $('.menu__list').toggleClass('menu__list--active');
    $('body').toggleClass('hidden');
    });


    $('.top__theme-btn--light').on('click', function(){
    $('.top__theme-btn').removeClass('top__theme-btn--active');
    $($(this)).toggleClass('top__theme-btn--active');
    $('html').removeClass('dark');
    $('html').addClass('light');
    localStorage.setItem('theme', 'light')
  });
/* 
  if (localStorage.getItem('theme') === 'light') {
    $('html').removeClass('dark');
    $('html').addClass('light');
    $('.top__theme-btn--light').addClass('top__theme-btn--active');
    $('.top__theme-btn--dark').removeClass('top__theme-btn--active');

  }
  else {
    $('html').removeClass('light');
    localStorage.setItem('theme', 'dark')
    $('.top__theme-btn--dark').addClass('top__theme-btn--active');
    $('.top__theme-btn--light').removeClass('top__theme-btn--active');

  } */
var offset = 200;
 var duration = 400;
 $(window).on('scroll', function() {
   if ($(this).scrollTop() > offset) {
    $('.scroll-top').addClass('scroll-top--active');
   } else {
    $('.scroll-top').removeClass('scroll-top--active');
   }
 });       
 $('.scroll-top').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({scrollTop: 0}, duration);
   return false;
 })
  
  
  if (localStorage.getItem('theme') === 'dark'){
    $('html').removeClass('light');
    /* localStorage.setItem('theme', 'dark') */
    $('.top__theme-btn--dark').addClass('top__theme-btn--active');
    $('.top__theme-btn--light').removeClass('top__theme-btn--active');
  }
  else{
    $('html').removeClass('dark');
    $('html').addClass('light');
    $('.top__theme-btn--light').addClass('top__theme-btn--active');
    $('.top__theme-btn--dark').removeClass('top__theme-btn--active');

  }

    $('.top__theme-btn--dark').on('click', function(){
    $('.top__theme-btn').removeClass('top__theme-btn--active');
    $($(this)).toggleClass('top__theme-btn--active');
    $('html').removeClass('light');
    localStorage.setItem('theme', 'dark')
    });
   
});

$(document).ready(function ($) {
  function animateElements() {
      $('.progressbar').each(function () {
          var elementPos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          var percent = $(this).find('.circle').attr('data-percent');
          var percentage = parseInt(percent, 10) / parseInt(100, 10);
          var animate = $(this).data('animate');
          if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
              $(this).data('animate', true);
              $(this).find('.circle').circleProgress({
                  startAngle: -Math.PI / 2,
                  value: percentage,
                  size: 191,
                  thickness: 10,
                  lineCap: "round",
                  fill: {
                      color: '#FE206F'
                  },
                  emptyFill: 'rgba(97, 97, 97, .4)',
              }).on('circle-animation-progress', function (event, progress, stepValue) {
                  $(this).find('div').text(String(stepValue.toFixed(2)).substr(2) + '%');
              }).stop();
          }
      });
  }
  animateElements();
  $(window).scroll(animateElements);
});


var mixer = mixitup('.portfolio__works', {
    animation: {
      duration: 900,
      easing: 'ease-in-out'
    }
   });
