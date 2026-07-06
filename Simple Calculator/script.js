// variable to store my current operation
let currentInput = '';
// function to add number or operator to the current operation
function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').innerText = currentInput;
}     
// Clearing current operation
function clearDisplay() {
    currentInput = '';
    document.getElementById('display').innerText = '0';
}
 // Calculating current operation
function calculate() {
    try {
        let result = eval(currentInput);
        document.getElementById('display').innerText = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').innerText = 'Invalid Operator';
        currentInput = '';
    }
 }