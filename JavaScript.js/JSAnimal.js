document.addEventListener('DOMContentLoaded', function() {
  var fragment = window.location.hash;
  if (fragment) {
    var element = document.querySelector(fragment);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }
});

   document.addEventListener('DOMContentLoaded', function() {
    var fragment = window.location.hash;
    if (fragment) {
      var element = document.querySelector(fragment);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });

/*_______________*/
   var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}
/*___________________*/



document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });
});

   