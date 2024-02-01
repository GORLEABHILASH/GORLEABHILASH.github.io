"use strict";

(function(){


  const navSubmenu = document.querySelector('.nav-submenu');
  const navmenuButton = document.querySelector('.nav-menu__button');

  navmenuButton.addEventListener('click',function(){
    navSubmenu.classList.toggle('open');

  });



})();