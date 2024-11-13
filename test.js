const formSubmit = document.querySelector(".btn-submit");
formSubmit.addEventListener("click", verifyForm);
const firstName = document.getElementById("first");
const formData = document.querySelectorAll(".formData");

// pour lancer la fonction qui lance toutes les autres fonctions
function verifyForm() {
    verifyFirstName();
    // verifyLastName();
    // verifyEmail();
    // verifyBirthdate();
    // verifyQuantity();
    // verifyLocation();
    // verifyCheckbox();
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

function validate() {
    // document.forms["reserve"].reset();
    return false;
}
