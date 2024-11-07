const formSubmit = document.querySelector('.btn-submit');
formSubmit.addEventListener("click", radioIsChecked);

// function isNumber(value) {
//     return typeof value === 'number';
//   }



function radioIsChecked() {
    var radios = document.getElementsByName('location');
    let isChecked = false;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isChecked = true;
            console.log("Le bouton radio sélectionné est :", radios[i].value);
            break;
        }

        if (!isChecked) {
            console.log("Aucun bouton radio n'est sélectionné.");
            
            return false;
        }
    }
}

 


// let output = document.getElementById("output");
//                       function checkRadio(){
//                          // accessing the radio buttons
//                          let radio1 = document.getElementById('radio1');
//                          let radio2 = document.getElementById('radio2');
//                          let radio3 = document.getElementById('radio3');
//                          // checking if any radio button is selected
//                          if(radio1.checked){
//                             output.innerHTML = "The radio button with value " + radio1.value + " is checked!";
//                          }
//                          if(radio2.checked){
//                             output.innerHTML = "The radio button with value " + radio2.value + " is checked!";
//                          }
//                          if(radio3.checked){
//                             output.innerHTML = "The radio button with value " + radio3.value + " is checked!";
//                          }
//                       }


function validate() {
    // document.forms["reserve"].reset();
    return false;
  }
