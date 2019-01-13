document.addEventListener('DOMContentLoaded', function(){
  var eyeElement = document.querySelector('#eye');

  if (typeof(eyeElement) != 'undefined' && eyeElement != null) {
      var eye = Snap(eyeElement);
      var upperEyelid = eye.path("M17.5,46.5l-8.8-8.8C24,22.5,44.3,14.1,65.8,14.1c21.6,0,41.9,8.4,57.1,23.7l-8.8,8.8c-12.9-12.9-30.1-20-48.4-20S30.4,33.6,17.5,46.5z").attr({fill: '#fff'});
      var lowerEyelid = eye.path("M14.1,75.4c28.8,28.8,75.1,29.1,103.5,0.6").attr({fill: 'none', stroke: '#fff', strokeWidth: 11, strokeMiterlimit: 10});
      var topLash1 = eye.rect(81.9, 11.2, 23, 12).attr({fill: '#fff', transform: 'matrix(0.4671 -0.8842 0.8842 0.4671 35.0331 91.4769)'});
      var topLash2 = eye.polygon('17.7,46.1 0,29.8 7,22.1 24.7,38.4').attr({fill: '#fff'});
      var topLash3 = eye.polygon('114.2,46.2 107.2,38.4 124.7,22 131.7,29.8').attr({fill: '#fff'});
      var topLash4 = eye.rect(59.6, 0, 11, 24).attr({fill: '#fff'});
      var topLash5 = eye.polygon('37.9,30.3 26.6,8.8 36.4,4 47.7,25.5').attr({fill: '#fff'});
      var bottomLash1 = eye.rect(88.9, 92.1, 11, 20).attr({fill: '#fff', transform: 'matrix(0.8924 -0.4512 0.4512 0.8924 -35.8219 53.5397)'});
      var bottomLash2 = eye.rect(60, 92.9, 11, 24).attr({fill: '#fff'});
      var bottomLash3 = eye.polygon('36.8,113.1 26.9,108.4 37.8,87.1 47.7,91.8').attr({fill: '#fff'});
      var bottomLash4 = eye.polygon('7.3,96.3 0.3,88.7 17.4,72.3 24.4,79.9').attr({fill: '#fff'});
      var bottomLash5 = eye.polygon('124.3,96.3 108.9,80.8 115.2,73.6 130.6,89.1').attr({fill: '#fff'});
      var topLashesGroup = eye.group(topLash1, topLash2, topLash3, topLash4, topLash5);
      var bottomLashesGroup = eye.group(bottomLash1, bottomLash2, bottomLash3, bottomLash4, bottomLash5).attr({opacity: 0});
      var ellipse = eye.ellipse(65.8, 58.7, 21.5, 22).attr({fill: '#fff'});
      var pupil = eye.circle(65.5, 58.5, 10.2).attr({fill: '#000'});


      function blink() {
          topLashesGroup.animate({opacity: 0}, 50, function(){
              topLashesGroup.animate({opacity: 1}, 200);
          });

          bottomLashesGroup.animate({opacity: 1}, 50, function(){
              bottomLashesGroup.animate({opacity: 0}, 200);
          });

          ellipse.animate({ry: 1}, 50, function(){
              ellipse.animate({ry: 22}, 200);
          });
      }

      $.fn.isInViewport = function() {
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();

          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          return elementBottom > viewportTop && elementTop < viewportBottom;
      };

      setInterval(blink, 10000);
  }

});
