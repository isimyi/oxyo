document.addEventListener('DOMContentLoaded', function(){

  function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
  }

  var burgers = $$('.nav-toggler');
  var page = document.querySelector('.page');

  for (var i = 0; i < burgers.length; i++) {
    var burger = burgers[i];

    burger.addEventListener('click', showBurgerTarget);

    function showBurgerTarget() {
      var targetId = this.getAttribute('data-target-id');
      var targetClassToggle = this.getAttribute('data-target-class-toggle');

      if (targetId && targetClassToggle) {
        this.classList.toggle('nav-toggler--close');
        document.getElementById(targetId).classList.toggle(targetClassToggle);
        page.classList.toggle('page--freezed');

        if (targetId === 'main-nav') {
          document.querySelector('.promo').classList.toggle('promo--blur');
          document.querySelector('.page-header').classList.toggle('page-header--blur');

          $('.promo__logo').removeClass('promo__logo--hidden');
          $('.promo__planet-wrap').removeClass('promo__planet-wrap--hidden');
          $('.promo__text').removeClass('promo__text--visible');

        }
      }
    }
  }

});
