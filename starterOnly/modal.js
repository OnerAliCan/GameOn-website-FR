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

//fermer la modale en cliquant sur la croix

function closeModal() {
    modalbg.style.display = "none";
}

// verifier le formulaire

const formSubmit = document.querySelector(".btn-submit");

formSubmit.addEventListener("click", verifyForm);

// pour lancer la fonction qui lance toutes les autres fonctions
function verifyForm() {
    verifyFirstName();
    verifyLastName();
    verifyEmail();
    verifyBirthdate();
    verifyQuantity();
    verifyLocation();
    verifyCheckbox();
}

// prénom

function verifyFirstName() {
    if (document.getElementById("first").value.length <= 2) {
        console.log("prénom pas bon");

        // document.getElementById("firstname_message").innerHTML =
        //     "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        formData[0].setAttribute(
            "data-error",
            "Vous devez entrer 2 caractères ou plus."
        );
        formData[0].setAttribute("data-error-visible", "true");
        console.log(formData[0]);
        return false;
    } else {
        console.log("prenom ok");
        formData[0].removeAttribute("data-error");
        formData[0].setAttribute("data-error-visible", "false");
    }
}

//nom de famille

function verifyLastName() {
    if (document.getElementById("last").value.length <= 2) {
        console.log("nom pas bon");
        // document.getElementById("lastname_message").innerHTML =
        // "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        // alert("Le nom de famille doit faire plus de 2 caractères");
        return false;
    } else {
        console.log("nom de famille ok");
    }
}

function verifyEmail() {
    //Email

    if (
        document
            .getElementById("email")
            .value.match(
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            )
    ) {
        console.log("mail ok");
    } else {
        console.log("mail pas bon");
        // document.getElementById("email_message").innerHTML =
        //     "Veuillez respecter le format email";
        // alert('format de mail incorrect');
        return false;
    }
}

function verifyBirthdate() {
    // date de naissance

    if (document.getElementById("birthdate").value) {
        console.log("birthdate ok");
    } else {
        console.log("birthdate pas bon");
        // document.getElementById("birthdate_message").innerHTML =
        //     "Vous devez entrer votre date de naissance.";
        return false;
    }
}

function verifyQuantity() {
    //nombre de participations

    const quantityInput = document.getElementById("quantity").value;

    if (!isNaN(quantityInput) && quantityInput != "") {
        console.log("nbr participations ok");
    } else {
        console.log("nbr participations pas bon");
        // document.getElementById("quantity_message").innerHTML =
        //     "Veuillez renseigner votre nombre de participations";
        // alert('partipication pas bon');
        return false;
    }
}

function verifyLocation() {
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
        // document.getElementById("location_message").innerHTML =
        //     "Vous devez choisir une option.";
        return false;
    }
}

function verifyCheckbox() {
    // verification checkbox conditions

    if (document.getElementById("checkbox1").checked) {
        console.log("Conditions acceptées ok");
    } else {
        console.log("conditions non acceptées");
        // document.getElementById("checkbox_message").innerHTML =
        //     "Vous devez vérifier que vous acceptez les termes et conditions.";
        // alert('Conditions non acceptées');
        return false;
    }
}

function validate() {
    // document.forms["reserve"].reset();
    return false;
}
