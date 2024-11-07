const formSubmit = document.querySelector('.btn-submit');
formSubmit.addEventListener("click", isNumber);

// function isNumber(value) {
//     return typeof value === 'number';
//   }



function isNumber() {
    const quantityInput = document.getElementById('quantity').value;
    console.log(quantityInput);

    if(!isNaN(quantityInput) && quantityInput != '' ){
        console.log('ok');
    }
    else {
        console.log('pas bon');
        return false;
    }
    
    // console.log(!isNaN(quantity)); // Vérifie si c’est bien un nombre
    }

 

// console.log(isNumber(42)); // true
// console.log(isNumber('number')); // false
// console.log(isNumber(true)); // false


function validate() {
    // document.forms["reserve"].reset();
    return false;
  }
