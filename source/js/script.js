'use strict';

const navMain = document.querySelector(".main-nav");
const navToggle = navMain.querySelector(".main-nav__toggle");

if (navMain !== null) {
  navMain.classList.remove("main-nav--nojs");
  navMain.classList.remove("main-nav--closed-nojs");
  navMain.classList.add("main-nav--js");

  navToggle.addEventListener("click", function () {
    navMain.classList.toggle("main-nav--closed");
    navMain.classList.toggle("main-nav--opened");
  });
}
