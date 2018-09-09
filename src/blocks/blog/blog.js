$(document).ready(function () {
  $('.blog__link').on('click', function (evt) {
    evt.preventDefault();
    $('.blog__text').toggleClass('blog__text--hidden');
    $('.blog__message').toggleClass('blog__message--visible');
  });
});
