$(document).ready(function() {
  $(".menu-icon").click(function() {
    $('.menu-icon').toggleClass("is-opened");
    $('.menu').toggleClass("is-opened");
    $('body').toggleClass('overflow');
  });
});
