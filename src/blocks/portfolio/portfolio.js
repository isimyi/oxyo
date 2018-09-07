$(document).ready(function () {
  $('.portfolio__item').hover(function () {
    $(this).find('.portfolio__descr').addClass('magictime vanishIn');
  });
});
