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
const modalInitialContent = document.querySelector(".modal-body");
const modalInscriptionValidate = document.getElementById(
    "modal_inscription_validate"
);

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//fermer la modale en cliquant sur la croix

function closeModal() {
    modalbg.style.display = "none";
}

function validate() {
    // document.forms["reserve"].reset();
    modalInitialContent.style.display = "none";
    modalInscriptionValidate.style.display = "block";
    return false;
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
            "Le prénom doit comporter au moins 2 caractères."
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
        formData[1].setAttribute(
            "data-error",
            "Le nom doit comporter au moins 2 caractères."
        );
        formData[1].setAttribute("data-error-visible", "true");
        console.log(formData[1]);
        return false;
    } else {
        console.log("nom de famille ok");
        formData[1].removeAttribute("data-error");
        formData[1].setAttribute("data-error-visible", "false");
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
        formData[2].removeAttribute("data-error");
        formData[2].setAttribute("data-error-visible", "false");
    } else {
        console.log("mail pas bon");
        formData[2].setAttribute(
            "data-error",
            "Le format de l'adresse e-mail est incorrect."
        );
        formData[2].setAttribute("data-error-visible", "true");
        console.log(formData[2]);
        return false;
    }
}

function verifyBirthdate() {
    // date de naissance

    if (document.getElementById("birthdate").value) {
        console.log("birthdate ok");
        formData[3].removeAttribute("data-error");
        formData[3].setAttribute("data-error-visible", "false");
    } else {
        console.log("birthdate pas bon");
        formData[3].setAttribute(
            "data-error",
            "La date de naissance ne peut pas être vide."
        );
        formData[3].setAttribute("data-error-visible", "true");
        console.log(formData[3]);
        return false;
    }
}

function verifyQuantity() {
    //nombre de participations

    const quantityInput = document.getElementById("quantity").value;

    if (!isNaN(quantityInput) && quantityInput != "") {
        console.log("nbr participations ok");
        formData[4].removeAttribute("data-error");
        formData[4].setAttribute("data-error-visible", "false");
    } else {
        console.log("nbr participations pas bon");
        formData[4].setAttribute(
            "data-error",
            "Veuillez entrer un nombre valide de participations."
        );
        formData[4].setAttribute("data-error-visible", "true");
        console.log(formData[4]);
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
            formData[5].removeAttribute("data-error");
            formData[5].setAttribute("data-error-visible", "false");
            break;
        }
    }
    if (!isChecked) {
        console.log("Aucun bouton radio n'est sélectionné.");
        formData[5].setAttribute(
            "data-error",
            "Veuillez sélectionner une option."
        );
        formData[5].setAttribute("data-error-visible", "true");
        console.log(formData[5]);
        return false;
    }
}

function verifyCheckbox() {
    // verification checkbox conditions

    if (document.getElementById("checkbox1").checked) {
        console.log("Conditions acceptées ok");
        formData[6].removeAttribute("data-error");
        formData[6].setAttribute("data-error-visible", "false");
    } else {
        console.log("conditions non acceptées");
        formData[6].setAttribute(
            "data-error",
            "Veuillez accepter les conditions générales avant de soumettre le formulaire."
        );
        formData[6].setAttribute("data-error-visible", "true");
        console.log(formData[6]);
        return false;
    }
}
