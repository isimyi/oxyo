$(document).ready(function () {
  var pageContent = $('.page__inner');

  $('.modal-link').magnificPopup({
    type: 'inline',
    preloader: false,
    showCloseBtn: true,
    closeBtnInside: true,
    fixedBgPos: true,
    fixedContentPos: true,
    callbacks: {
      open: function() {
        pageContent.addClass('blurred');
      },
      close: function() {
        pageContent.removeClass('blurred');
      }
    }
  });

});
