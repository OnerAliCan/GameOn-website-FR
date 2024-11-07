const formSubmit = document.querySelector(".btn-submit");
formSubmit.addEventListener("click", checkboxIsChecked);

function checkboxIsChecked() {
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
}

function validate() {
    // document.forms["reserve"].reset();
    return false;
}
