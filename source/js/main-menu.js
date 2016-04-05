(function(){
  var header = document.querySelector(".page-header");
  var menu = header.querySelector(".page-header__menu-inner");
  var button = header.querySelector(".main-menu__btn");
  var iconCross = header.querySelector(".main-menu__btn-cross");
  var iconHam = header.querySelector(".main-menu__btn-hamburger");
  var list = header.querySelector(".main-menu__list");

  if( menu != undefined || button != undefined || iconCross != undefined || iconHam != undefined || list != undefined) {
    header.classList.remove("page-header--main--open");
    menu.classList.remove("page-header__menu-inner--open");
    iconCross.classList.remove("main-menu__btn-cross--show");
    iconHam.classList.remove("main-menu__btn-hamburger--hide");
    list.classList.add("main-menu__list--open");
    list.classList.add("main-menu__list--hide");

    button.addEventListener("click", function(event){
      event.preventDefault();
      menu.classList.toggle("page-header__menu-inner--open");
      iconCross.classList.toggle("main-menu__btn-cross--show");
      iconHam.classList.toggle("main-menu__btn-hamburger--hide");
      list.classList.toggle("main-menu__list--hide");
    });
  }
})();
