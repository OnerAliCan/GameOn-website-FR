window.onload= function() {

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

document.querySelector(".close").addEventListener("click", closeModal);

}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");



// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// ******** CODE PERSO ********

//fermer la modale en cliquant sur la croix


function closeModal() {
  modalbg.style.display = "none";
}

// verifier le formulaire

const formSubmit = document.querySelector('.btn-submit');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');

formSubmit.addEventListener("click", verifyForm);

function verifyForm() {

  if(firstName.value.length <= 2) {
    alert("Le prénom doit faire plus de 2 caractères");
  }
  else {
    console.log("prenom ok");
  }

  if(lastName.value.length <= 2) {
    alert("Le nom de famille doit faire plus de 2 caractères");
  }
  else {
    console.log("nom de famille ok");
  }

}

function validateEmail(email) {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  return emailPattern.test(email);
  
  }

  function validate() {
    // document.forms["reserve"].reset();
    return false;
  }