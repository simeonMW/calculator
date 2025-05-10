const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const devide = document.getElementById('devide');
const clear = document.getElementById('clear');
const form = document.getElementById('equals');
const display = document.getElementById('textground');

form.addEventListener('click', (event)=>{
    event.preventDefault();

    const newForm = new FormData(form);
    const equation = newForm.get('textground');

    display.value = eval(equation);
    

})

// Function to update the display
function updateDisplay(value) {
    display.value += value; // Append the value to the textarea
}

// Event listeners for number buttons
one.addEventListener('click', () => updateDisplay('1'));
two.addEventListener('click', () => updateDisplay('2'));
three.addEventListener('click', () => updateDisplay('3'));
four.addEventListener('click', () => updateDisplay('4'));
five.addEventListener('click', () => updateDisplay('5'));
six.addEventListener('click', () => updateDisplay('6'));
seven.addEventListener('click', () => updateDisplay('7'));
eight.addEventListener('click', () => updateDisplay('8'));
nine.addEventListener('click', () => updateDisplay('9'));
zero.addEventListener('click', () => updateDisplay('0'));

// Event listeners for operator buttons
add.addEventListener('click', () => updateDisplay('+'));
subtract.addEventListener('click', () => updateDisplay('-'));
multiply.addEventListener('click', () => updateDisplay('*'));
divide.addEventListener('click', () => updateDisplay('/'));

// Event listener for the "C" (clear) button
clear.addEventListener('click', () => {
    display.value = ''; // Clear the display
});

// Event listener for the "DEL" (delete) button
del.addEventListener('click', () => {
    display.value = display.value.slice(0, -1); // Remove the last character
});

// Event listener for the "=" button
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    try {
        const equation = display.value; // Get the input value
        const result = eval(equation); // Evaluate the mathematical expression
        display.value = result; // Display the result
    } catch (error) {
        display.value = 'Error'; // Display an error message for invalid input
    }
});







