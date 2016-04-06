(function(){
  var prices = document.querySelector(".prices__list");
  var review = document.querySelector(".reviews__list");
  var reviewSlides = review.querySelectorAll(".carousel-cell");
  var slides = prices.querySelectorAll(".carousel-cell");

  if( review != undefined || reviewSlides != undefined) {
    for (var i = 0; i < reviewSlides.length; i++){
      (reviewSlides[i]).classList.remove("carousel-cell--freejs");
    }
  };

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
