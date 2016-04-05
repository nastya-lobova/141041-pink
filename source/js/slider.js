(function(){
  var prices = document.querySelector(".prices__list");
  var slides = prices.querySelectorAll(".carousel-cell");

  if( prices != undefined || slides != undefined) {

    for (var i = 0; i < slides.length; i++){
      (slides[i]).classList.remove("carousel-cell--freejs");
    }

    if (window.innerWidth >= 700) {
      prices.classList.remove("carousel");
      prices.classList.remove("js-flickity");

      for (var i = 0; i < slides.length; i++){
        (slides[i]).classList.remove("carousel-cell");
      }
    }
  }
})();
