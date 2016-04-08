(function(){
  var header = document.querySelector(".page-header");
  var menu = header.querySelector(".page-header__menu-inner");
  var button = header.querySelector(".main-menu__btn");
  var list = header.querySelector(".main-menu__list");

  console.log(button);

  if( menu != undefined || list != undefined) {

    if (header.classList.contains("page-header--main-open")) {
      header.classList.remove("page-header--main-open");
    }
    
    header.classList.remove("page-header--open");
    menu.classList.remove("page-header__menu-inner--open");
    list.classList.add("main-menu__list--open");
    list.classList.add("main-menu__list--hide");

    button.addEventListener("click", function(event){

      event.preventDefault();
      menu.classList.toggle("page-header__menu-inner--open");
      list.classList.toggle("main-menu__list--hide");
    });
  }
})();
