(function(){
  var menu = document.querySelector(".page-header__main-menu");
  var button = menu.querySelector(".main-menu__btn");
  var iconCross = menu.querySelector(".main-menu__btn-cross");
  var iconHam = menu.querySelector(".main-menu__btn-hamburger");
  var list = menu.querySelector(".main-menu__list");

  button.addEventListener("click", function(event){
    event.preventDefault();

    menu.classList.toggle("main-menu--open");
    iconCross.classList.toggle("main-menu__btn-cross--show");
    iconHam.classList.toggle("main-menu__btn-hamburger--hide");
    list.classList.toggle("main-menu__list--hide");
  });
})();
