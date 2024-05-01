const inpA = document.querySelector('#a');
const inpB = document.querySelector('#b');
const inpC = document.querySelector('#c');

const validationSpan = document.querySelector('#validation');
const totalValidationSpan = document.querySelector('#total-validation');
const resultSpan = document.querySelector('#result');

function checkNum() {
    let num = inpA.value;

    // falsy values: false, undefined, [], null, '', 0
    // isNaN() returns "true" if "num" cannot be converted to a number
    if (num === '' || isNaN(num)) {
        validationSpan.innerText = `Input A and is not a number`
    } else {
        num = +num;
        
        if (num <= 0) {

            validationSpan.innerText = `Input A and is NOT POSITIVE`
            
        } else {
            
            validationSpan.innerText = `Input A and is SABABA`

        }

    }



}