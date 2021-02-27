'use strict';

const element = document.getElementById("user-phone");
const maskOptions = {
  mask: "+{7}(000)000-00-00"
};
const mask = IMask(element, maskOptions);

const body = document.body;
const navMain = document.querySelector(".main-nav");
const navToggle = navMain.querySelector(".main-nav__toggle");

if (navMain !== null) {
  navMain.classList.remove("main-nav--nojs");
  navMain.classList.remove("main-nav--closed-nojs");
  navMain.classList.add("main-nav--js");

  navToggle.addEventListener("click", function () {
    navMain.classList.toggle("main-nav--closed");
    navMain.classList.toggle("main-nav--opened");
    if (navMain.classList.contains("main-nav--opened")) {
      body.style.overflow = "hidden";
    }
    if (navMain.classList.contains("main-nav--closed")) {
      body.style.overflow = "visible";
    }
  });
}
