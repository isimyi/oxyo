$(document).ready(function () {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  if (!isFirefox) {
    $('.portfolio__item').hover(function () {
      $(this).find('.portfolio__descr').addClass('magictime vanishIn');
    });
  }
});
