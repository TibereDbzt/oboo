function slider() {
  var positionSlide = 0;
  var cpt = 1;
  var imgWidth = $('.slider-image').width();
  var slider1Height = $('main-carousel').height();
  $(document).ready(function() {
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
        $('.image-container').animate({left: positionSlide + imgWidth});
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


function selectColor() {
  var colorSelected = $('.bouton-couleur-defaut');
  $(document).ready(function() {
    colorSelected.css('border', '1px solid');
    colorSelected.css('transform', 'translateY(-1px)');
    $('.bouton-couleur').click(function() {
      colorSelected.css('border', 'none');
      colorSelected.css('transform', 'translateY(0)');
      $(this).css('border', '1px solid');
      $(this).css('transform', 'translateY(-1px)');
      colorSelected = $(this);
    })
  })
}
selectColor();

function selectAmountAndChangePrice() {
  var counterAmount = Number($('.produit-quantite > p').text());
  var currentPrice = Number($('.produit-prix p span').text());
  $(document).ready(function() {
    $('[src="images/icone-moins.svg"]').click(function() {
      if (counterAmount !=1) {
        $('.produit-quantite > p').text(counterAmount-1);
        $('.produit-prix p span').text(currentPrice-49.5);
        currentPrice = currentPrice - 49.5;
        counterAmount--;
        if (counterAmount == 1) {
          $('[src="images/icone-moins.svg"]').css('opacity', '0.4');
        }
      }
    })
    $('[src="images/icone-plus.svg"]').click(function() {
      $('.produit-quantite > p').text(counterAmount+1);
      $('.produit-prix p span').text(currentPrice+49.5);
      currentPrice = currentPrice + 49.5;
      counterAmount++;
      if (counterAmount > 1) {
        $('[src="images/icone-moins.svg"]').css('opacity', '1');
      }
    })
  })
}
selectAmountAndChangePrice();

function selectSize() {
  var sizeSelected = $('.produit-taille-defaut');
  $(document).ready(function() {
    sizeSelected.css('color','#000000');
    $('.produit-taille > p').click(function() {
      sizeSelected.css('color', '#c6c6c6');
      $(this).css('color', '#000000');
      sizeSelected = $(this);
    })
  })
}
selectSize();
