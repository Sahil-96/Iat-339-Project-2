/* From Lecture */

'use strict';

console.log("Hamburger nav javascript is running.");

var width = window.innerWidth;

console.log("window width: " + width + "px");

var navToggle = document.querySelector("#nav-toggle");
var navItems = document.querySelector("#nav-items");

window.addEventListener("resize", function(){
  width = window.innerWidth;
  if (width < 780){
    console.log("window width is less than 780px, collapse the menu");
    navToggle.classList.remove("hidden")
    navToggle.setAttribute("aria-hidden", "false");
    navItems.classList.add("hidden");
  } else {
    navToggle.classList.add("hidden");
    navItems.classList.remove("hidden");
  }

});

navToggle.addEventListener("click", function(){
  console.log("#nav-toggle has been clicked");

  if (navItems.classList.contains("hidden")){
    console.log(" #nav-items are hidden, showing them now.");
    navItems.classList.remove("hidden");
  } else{
    console.log("#nav-items are showing, hiding them now.");
    navItems.classList.add("hidden");
  }
})
