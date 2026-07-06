// Global variable to store the current input
let currentInput = '';
// Add number/operator to display
function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}
        
// Clear the display
function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}
        
 // Calculate result
function calculate() {
     try {
         // Replace * with * for JavaScript
         let expression = currentInput.replace(/×/g, '*');
         let result = eval(expression);
         document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
    document.getElementById('display').value = 'Error';
    currentInput = '';
    }
 }