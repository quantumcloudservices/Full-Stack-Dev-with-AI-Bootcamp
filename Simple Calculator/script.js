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
//Calculating multiple operations
// function calculateMultipleOperations() {
//     let operations = document.getElementById('operationInput').value.split(',');
//     if (operationInput.trim() === '') {
//         document.getElementById('display').innerText = 'Enter operation separated by commas';
//         return;
//     }
//     let operations = operationInput.split(',');
//     let results = [];
//     for(let i = 0; i < operations.length; i++) {
//         try {
//             let operation = operations[i].trim();
//             if (operation !== '') {
//                 let result = eval(operation);
//                 results.push(result);
//             } else {
//                 results.push('Invalid Operator');
//             }
//         } catch (error) {
//             results.push('Invalid Operator');
//         }
//     }
//     document.getElementById('display').innerText = results.join(', ');
// }

