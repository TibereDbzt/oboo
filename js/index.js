function scrollClick() {
  $(document).ready(function() {
    $('.img-scroll,.img-scroll-point').click(function() {
      $('html, body').animate({ scrollTop: $('.background-gris').offset().top }, 750, 'swing');
    })
  })
}
scrollClick();

var parallaxInstance = new Parallax($('.conteneur-parallax')[0]);
