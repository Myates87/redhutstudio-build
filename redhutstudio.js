function displayEarrings() {
  var earringCheck = document.getElementById("earringsCheckBox");
  var earringDisplayer = document.getElementById("earrings");

  if (earringCheck.checked === true) {
    earringDisplayer.style.display = "block";
  } else earringDisplayer.style.display = "none";
}

function displayNecklaces() {
  var necklaceCheck = document.getElementById("necklacesCheckBox");
  var necklaceDisplayer = document.getElementById("necklaces");

  if (necklaceCheck.checked === true) {
    necklaceDisplayer.style.display = "block";
  } else necklaceDisplayer.style.display = "none";
}

function displayWireWraps() {
  var wireWrapCheck = document.getElementById("wireWrapsCheckBox");
  var wireWrapDisplayer = document.getElementById("wireWraps");

  if (wireWrapCheck.checked === true) {
    wireWrapDisplayer.style.display = "block";
  } else wireWrapDisplayer.style.display = "none";
}

/* product object declaration */

/* MAYA EARRINGS */

var mayaImage = document.getElementById('maya')

var maya = {
    name: "maya",
    price: "$30.00",
    image: document.getElementById('maya'),
    avalabilty: 1
};


function mayaPage(){

}