$(function(){
  /* 
  $('.circle').circleProgress({
    size: 191,
    lineCap: "round",
    fill: "#FE206F",
    });
     */

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

  // Show animated elements
  animateElements();
  $(window).scroll(animateElements);
});