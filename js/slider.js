function slider() {
  $(document).ready(function(){
      $('#fleche-gauche').addClass('disabled');
      $('#fleche-droite').click(function(){
        if (cpt !== 3) {
          $('#fleche-gauche').removeClass('disabled');
          $('.image-container').animate({left: positionSlide - imgWidth});
          positionSlide = positionSlide - imgWidth;
          cpt = cpt + 1;
          $('.cpt-slide span').text(cpt)
        }
        if (cpt == 3) {
          $('#fleche-droite').addClass('disabled');
        }
      });
      $('#fleche-gauche').click(function() {
        $('#fleche-droite').css('display', 'inline-block');
        if (cpt !== 1) {
          $('#fleche-droite').removeClass('disabled');
          $('.image-container').animate({ left: positionSlide + imgWidth});
          positionSlide = positionSlide + imgWidth;
          cpt = cpt - 1;
          $('.cpt-slide span').text(cpt)
        }
        if (cpt == 1) {
          $('#fleche-gauche').addClass('disabled');
        }
      })
  })
}
slider();

function getImageWidthAndReset() {
  $(document).ready(function() {
    $(window).on('resize', function() {
      cpt = 1;
      positionSlide = 0;
      imgWidth = $('.slider-image').width();
      $('.image-container').css('left', '0');
      $('.cpt-slide span').text(cpt);
      $('#fleche-droite').removeClass('disabled');
      $('#fleche-gauche').addClass('disabled');
    })
  })
}
getImageWidthAndReset();
