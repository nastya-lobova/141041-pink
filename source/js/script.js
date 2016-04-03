(function(){
  var menu = document.querySelector(".page-header__menu");
  var button = menu.querySelector(".main-menu__btn");
  var iconCross = menu.querySelector(".main-menu__btn-cross");
  var iconHam = menu.querySelector(".main-menu__btn-hamburger");
  var list = menu.querySelector(".main-menu__list");

  button.addEventListener("click", function(event){
    event.preventDefault();

    menu.classList.toggle("page-header__menu--open");
    iconCross.classList.toggle("main-menu__btn-cross--show");
    iconHam.classList.toggle("main-menu__btn-hamburger--hide");
    list.classList.toggle("main-menu__list--hide");
  });
})();



(function(){
  var prices = document.querySelector(".prices__list");
  var slides = prices.querySelectorAll(".carousel-cell");


  if (window.innerWidth >= 700) {
    prices.classList.remove("carousel");
    prices.classList.remove("js-flickity");

    for (var i = 0; i < slides.length; i++){
      (slides[i]).classList.remove("carousel-cell");
    }

  }
})();

(function(){
  var inputTel = document.querySelector(".input--tel");
  var inputEmail = document.querySelector(".input--email");


  if (window.innerWidth >= 700) {
    inputTel.placeholder = "+7 XXX XXX-XX-XX";
    inputEmail.placeholder = "Введите почту";

  }
})();


function initMap() {
  // Create a map object and specify the DOM element for display.

    var map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 59.93575, lng: 30.3217536},
      scrollwheel: false,
      zoom: 15,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      disableDefaultUI: true
    });

    var image = "../img/icon-map-marker.svg";
    var myLatLng = new google.maps.LatLng(59.93510,30.3217536);
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      icon: image
    });
}

(function(){
  var menu = document.querySelector(".page-header__menu");
  var button = menu.querySelector(".main-menu__btn");
  var iconCross = menu.querySelector(".main-menu__btn-cross");
  var iconHam = menu.querySelector(".main-menu__btn-hamburger");
  var list = menu.querySelector(".main-menu__list");

  button.addEventListener("click", function(event){
    event.preventDefault();

    menu.classList.toggle("page-header__menu--open");
    iconCross.classList.toggle("main-menu__btn-cross--show");
    iconHam.classList.toggle("main-menu__btn-hamburger--hide");
    list.classList.toggle("main-menu__list--hide");
  });
})();



(function(){
  var prices = document.querySelector(".prices__list");
  var slides = prices.querySelectorAll(".carousel-cell");


  if (window.innerWidth >= 700) {
    prices.classList.remove("carousel");
    prices.classList.remove("js-flickity");

    for (var i = 0; i < slides.length; i++){
      (slides[i]).classList.remove("carousel-cell");
    }

  }
})();

(function(){
  var inputTel = document.querySelector(".input--tel");
  var inputEmail = document.querySelector(".input--email");


  if (window.innerWidth >= 700) {
    inputTel.placeholder = "+7 XXX XXX-XX-XX";
    inputEmail.placeholder = "Введите почту";

  }
})();


function initMap() {
  // Create a map object and specify the DOM element for display.

    var map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 59.93575, lng: 30.3217536},
      scrollwheel: false,
      zoom: 15,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      disableDefaultUI: true
    });

    var image = "../img/icon-map-marker.svg";
    var myLatLng = new google.maps.LatLng(59.93510,30.3217536);
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      icon: image
    });
}

(function(){
  var menu = document.querySelector(".page-header__menu");
  var button = menu.querySelector(".main-menu__btn");
  var iconCross = menu.querySelector(".main-menu__btn-cross");
  var iconHam = menu.querySelector(".main-menu__btn-hamburger");
  var list = menu.querySelector(".main-menu__list");

  button.addEventListener("click", function(event){
    event.preventDefault();

    menu.classList.toggle("page-header__menu--open");
    iconCross.classList.toggle("main-menu__btn-cross--show");
    iconHam.classList.toggle("main-menu__btn-hamburger--hide");
    list.classList.toggle("main-menu__list--hide");
  });
})();



(function(){
  var prices = document.querySelector(".prices__list");
  var slides = prices.querySelectorAll(".carousel-cell");


  if (window.innerWidth >= 700) {
    prices.classList.remove("carousel");
    prices.classList.remove("js-flickity");

    for (var i = 0; i < slides.length; i++){
      (slides[i]).classList.remove("carousel-cell");
    }

  }
})();

(function(){
  var inputTel = document.querySelector(".input--tel");
  var inputEmail = document.querySelector(".input--email");


  if (window.innerWidth >= 700) {
    inputTel.placeholder = "+7 XXX XXX-XX-XX";
    inputEmail.placeholder = "Введите почту";

  }
})();


function initMap() {
  // Create a map object and specify the DOM element for display.

    var map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 59.93575, lng: 30.3217536},
      scrollwheel: false,
      zoom: 15,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      disableDefaultUI: true
    });

    var image = "../img/icon-map-marker.svg";
    var myLatLng = new google.maps.LatLng(59.93510,30.3217536);
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      icon: image
    });
}

(function(){
  var menu = document.querySelector(".page-header__menu");
  var button = menu.querySelector(".main-menu__btn");
  var iconCross = menu.querySelector(".main-menu__btn-cross");
  var iconHam = menu.querySelector(".main-menu__btn-hamburger");
  var list = menu.querySelector(".main-menu__list");

  button.addEventListener("click", function(event){
    event.preventDefault();

    menu.classList.toggle("page-header__menu--open");
    iconCross.classList.toggle("main-menu__btn-cross--show");
    iconHam.classList.toggle("main-menu__btn-hamburger--hide");
    list.classList.toggle("main-menu__list--hide");
  });
})();



(function(){
  var prices = document.querySelector(".prices__list");
  var slides = prices.querySelectorAll(".carousel-cell");


  if (window.innerWidth >= 700) {
    prices.classList.remove("carousel");
    prices.classList.remove("js-flickity");

    for (var i = 0; i < slides.length; i++){
      (slides[i]).classList.remove("carousel-cell");
    }

  }
})();

(function(){
  var inputTel = document.querySelector(".input--tel");
  var inputEmail = document.querySelector(".input--email");


  if (window.innerWidth >= 700) {
    inputTel.placeholder = "+7 XXX XXX-XX-XX";
    inputEmail.placeholder = "Введите почту";

  }
})();


function initMap() {
  // Create a map object and specify the DOM element for display.

    var map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 59.93575, lng: 30.3217536},
      scrollwheel: false,
      zoom: 15,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      disableDefaultUI: true
    });

    var image = "../img/icon-map-marker.svg";
    var myLatLng = new google.maps.LatLng(59.93510,30.3217536);
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      icon: image
    });
}
