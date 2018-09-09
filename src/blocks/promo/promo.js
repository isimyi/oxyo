$(document).ready(function () {
  var promoSection = document.getElementById('promo-inner');
  var parallaxInstance = new Parallax(promoSection);
  var firstLetter = $('.logo-letter');
  var firstLetterWidth = firstLetter[0].getBoundingClientRect().width;
  var firstLetterHeight = firstLetter[0].getBoundingClientRect().height;
  var firstLetterPosition = $('.promo__logo').offset();
  var letterCircle = $('.logo-circle');
  var letterCircleWidth = letterCircle[0].getBoundingClientRect().width;
  var letterCircleHeight = letterCircle[0].getBoundingClientRect().height;
  var letterCirclePosition = letterCircle.offset();
  var planet = $('.promo__planet');

  planet.css('top', firstLetterPosition.top + (firstLetterHeight / 3));

  $('#first-letter-clone').css({
    'width': firstLetterWidth,
    'height': firstLetterHeight
  });

  $('#first-letter-clone').css(firstLetterPosition);

  $('#letter-circle-clone').css({
    'width': letterCircleWidth,
    'height': letterCircleHeight
  });

  $(window).resize(function () {
    firstLetterWidth = firstLetter[0].getBoundingClientRect().width;
    firstLetterHeight = firstLetter[0].getBoundingClientRect().height;
    firstLetterPosition = firstLetter.offset();
    letterCircleWidth = letterCircle[0].getBoundingClientRect().width;
    letterCircleHeight = letterCircle[0].getBoundingClientRect().height;
    letterCirclePosition = letterCircle.offset();

    planet.css('top', firstLetterPosition.top + (firstLetterHeight / 3));

    $('#first-letter-clone').css({
      'width': firstLetterWidth,
      'height': firstLetterHeight
    });
    $('#first-letter-clone').css(firstLetterPosition);

    $('#letter-circle-clone').css({
      'width': letterCircleWidth,
      'height': letterCircleHeight
    });
  });
});
