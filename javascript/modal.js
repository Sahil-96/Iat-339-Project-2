'use strict';

console.log("Modal popup javascript is running.");

// Get the modal
var modals = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal
btns.onclick = function() {
  modals.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modals.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  console.log("window");
  if (event.target == modals) {
    console.log("event");

    modals.style.display = "none";
  }
}
