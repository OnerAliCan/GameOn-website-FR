window.onload = function () {
    // launch modal event
    modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

    document.querySelector(".close").addEventListener("click", closeModal);
};

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

const formSubmit = document.querySelector(".btn-submit");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");

formSubmit.addEventListener("click", verifyForm);

function verifyForm() {
    // prénom

    if (firstName.value.length <= 2) {
        // alert("Le prénom doit faire plus de 2 caractères");
        console.log("prénom pas bon");
        return false;
    } else {
        console.log("prenom ok");
    }

    //nom de famille

    if (lastName.value.length <= 2) {
        console.log("nom pas bon");
        // alert("Le nom de famille doit faire plus de 2 caractères");
        return false;
    } else {
        console.log("nom de famille ok");
    }

    //Email

    const emailPattern =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailInput = document.getElementById("email").value;

    if (emailInput.match(emailPattern)) {
        console.log("mail ok");
    } else {
        console.log("mail pas bon");
        // alert('format de mail incorrect');
        return false;
    }

    // date de naissance

    const dateInput = document.getElementById("birthdate").value;

    if (dateInput) {
        console.log("birthdate ok");
    } else {
        console.log("birthdate pas bon");
        return false;
    }

    //nombre de participations

    const quantityInput = document.getElementById("quantity").value;

    if (!isNaN(quantityInput) && quantityInput != "") {
        console.log("nbr participations ok");
    } else {
        console.log("nbr participations pas bon");
        // alert('partipication pas bon');
        return false;
    }

    //boutons radios localisation

    var radios = document.getElementsByName("location");
    let isChecked = false;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isChecked = true;
            console.log("Le bouton radio sélectionné est :", radios[i].value);
            break;
        }
    }
    if (!isChecked) {
        console.log("Aucun bouton radio n'est sélectionné.");
        return false;
    }

    // verification checkbox conditions

    var checkbox = document.getElementById("checkbox1");

    if (checkbox.checked) {
        console.log("Conditions acceptées ok");
    } else {
        console.log("conditions non acceptées");
        // alert('Conditions non acceptées');
        return false;
    }
}

function validate() {
    // document.forms["reserve"].reset();
    return false;
}
