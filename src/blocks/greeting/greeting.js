$(document).ready(function () {

  $('#home-greeting').on('click', function () {
    $('.promo__logo').toggleClass('promo__logo--hidden');
    $('.promo__planet-wrap').toggleClass('promo__planet-wrap--hidden');
    $('.promo__text').toggleClass('promo__text--visible');
  });
});
