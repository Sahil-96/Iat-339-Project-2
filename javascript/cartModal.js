'use strict';

console.log("Cart Modal popup javascript is running.");

// Get the modelCart
var modelCart = document.getElementById("myModalCart");

// Get the button that opens the modelCart
var btn = document.getElementsByClassName("mod");
var i;

// Get the <span> element that closes the modelCart
var span = document.getElementsByClassName("close-cart")[0];

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    if (modelCart.style.display === "block") {
      modelCart.style.display = "none";
    } else {
      modelCart.style.display = "block";
    }
  });
}

// When the user clicks on <span> (x), close the modelCart
span.onclick = function() {
  modelCart.style.display = "none";
}

// When the user clicks anywhere outside of the modelCart, close it
window.onclick = function(event) {

  if (event.target == modelCart) {
    modelCart.style.display = "none";
  }

}
