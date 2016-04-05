(function(){
  var inputTel = document.querySelector(".input--tel");
  var inputEmail = document.querySelector(".input--email");

  if ( inputTel != undefined || inputEmail != undefined ) {
    if (window.innerWidth >= 700) {
      inputTel.placeholder = "+7 XXX XXX-XX-XX";
      inputEmail.placeholder = "Введите почту";
    }
  }
})();
