window.onload = function () {
	// launch modal event
	modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

	document
		.querySelectorAll(".close")[0]
		.addEventListener("click", closeModal);
	document
		.querySelectorAll(".close")[1]
		.addEventListener("click", closeModal);

	document
		.getElementsByClassName("close-button")[0]
		.addEventListener("click", closeModal);

	clearModal();
};

function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// Elements DOM
const modalbg = document.getElementById("form-modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalInscriptionValidate = document.getElementById("validation-modal");

// lancer modale
function launchModal() {
	modalbg.style.display = "block";
}

//fermer la modale en cliquant sur la croix et le vider à chaque

function closeModal() {
	modalbg.style.display = "none";
	modalInscriptionValidate.style.display = "none";
	clearModal();
}

// nettoyer la modale

function clearModal() {
	// nettoyer les 5 champs input
	for (let i = 0; i < 5; i++) {
		const data = formData[i];
		const input = data.querySelector("input");
		if (input) {
			input.value = "";
		}
	}

	var radios = document.getElementsByName("location");
	radios.forEach((radio) => {
		radio.checked = false;
	});

	formData.forEach((data) => {
		data.setAttribute("data-error-visible", "false");
	});
}

// verifier le formulaire

// pour lancer la fonction qui lance toutes les autres fonctions

function validate() {
	var formValid = true;

	if (!verifyFirstName()) {
		formValid = false;
	}
	if (!verifyLastName()) {
		formValid = false;
	}
	if (!verifyEmail()) {
		formValid = false;
	}
	if (!verifyBirthdate()) {
		formValid = false;
	}
	if (!verifyQuantity()) {
		formValid = false;
	}
	if (!verifyLocation()) {
		formValid = false;
	}
	if (!verifyCheckbox()) {
		formValid = false;
	}

	if (formValid) {
		// document.forms["reserve"].reset();
		modalbg.style.display = "none";
		modalInscriptionValidate.style.display = "block";
	}
	return false;
}

// prénom

function verifyFirstName() {
	if (document.getElementById("first").value.length <= 1) {
		console.log("prénom pas bon");
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
		return true;
	}
}

//nom de famille

function verifyLastName() {
	if (document.getElementById("last").value.length <= 1) {
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
		return true;
	}
}
//Email

function verifyEmail() {
	if (
		document
			.getElementById("email")
			.value.match(
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,63}$/
			)
	) {
		console.log("mail ok");
		formData[2].removeAttribute("data-error");
		formData[2].setAttribute("data-error-visible", "false");
		return true;
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

// date de naissance

function verifyBirthdate() {
	// calcul âge
	const input = document.getElementById("birthdate");
	const birthDate = new Date(input.value);
	const today = new Date();

	let age = today.getFullYear() - birthDate.getFullYear();
	const m = today.getMonth() - birthDate.getMonth();

	// Si l'anniversaire n'est pas encore passé cette année
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}

	if (document.getElementById("birthdate").value) {
		if (age > 17) {
			console.log("birthdate ok");
			console.log(document.getElementById("birthdate").value);
			formData[3].removeAttribute("data-error");
			formData[3].setAttribute("data-error-visible", "false");
			return true;
		} else {
			console.log("birthdate pas bon");
			formData[3].setAttribute(
				"data-error",
				"Vous devez avoir minimum 18 ans pour participer"
			);
			formData[3].setAttribute("data-error-visible", "true");
			console.log(formData[3]);
			return false;
		}
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
//nombre de participations

function verifyQuantity() {
	const quantityInput = document.getElementById("quantity").value;

	if (!isNaN(quantityInput) && quantityInput != "") {
		console.log("nbr participations ok");
		formData[4].removeAttribute("data-error");
		formData[4].setAttribute("data-error-visible", "false");
		return true;
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
//boutons radios localisation

function verifyLocation() {
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
	return true;
}

// verification checkbox conditions

function verifyCheckbox() {
	if (document.getElementById("checkbox1").checked) {
		console.log("Conditions acceptées ok");
		formData[6].removeAttribute("data-error");
		formData[6].setAttribute("data-error-visible", "false");
		return true;
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
