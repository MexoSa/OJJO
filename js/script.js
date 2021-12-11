$(document).ready(function () {
   $('.mobile-nav__burger').click(function (event) {
      $('.mobile-nav__burger,.mobile-nav__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('.about-our-shop__read-more').click(function (event) {
      $('.about-our-shop__text').toggleClass('active');
   });
});

