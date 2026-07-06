const display = document.getElementById('display');
        const clearButton = document.getElementById('clear');
        const equalButton = document.getElementById('equal');
        const buttons = document.querySelectorAll('.btn');

        let currentInput = '';
        let operator = null;
        let previousInput = '';
        let shouldResetDisplay = false;

        // Add event listeners to all buttons
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.getAttribute('data-value');
                
                if (button.id === 'clear') {
                    clear();
                } else if (button.id === 'equal') {
                    calculate();
                } else if (button.classList.contains('operator')) {
                    handleOperator(value);
                } else {
                    addToInput(value);
                }
            });
        });

        function addToInput(value) {
            // Prevent multiple decimal points
            if (value === '.' && currentInput.includes('.')) {
                return;
            }
            
            // If we should reset display, do so now
            if (shouldResetDisplay) {
                currentInput = '';
                shouldResetDisplay = false;
            }
            
            currentInput += value;
            updateDisplay();
        }

        function handleOperator(op) {
            if (currentInput === '') return;
            
            if (operator !== null) {
                calculate(); // Perform previous calculation first
            }
            
            operator = op;
            previousInput = currentInput;
            shouldResetDisplay = true;
        }

        function calculate() {
            if (operator === null || currentInput === '') return;
            
            let result;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            
            switch (operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        display.value = 'Error';
                        clear();
                        return;
                    }
                    result = prev / current;
                    break;
                default:
                    return;
            }
            
            // Format result to avoid long decimals
            display.value = parseFloat(result.toFixed(10)).toString();
            operator = null;
            previousInput = '';
            shouldResetDisplay = true;
        }

        function clear() {
            currentInput = '';
            operator = null;
            previousInput = '';
            shouldResetDisplay = false;
            updateDisplay();
        }

        function updateDisplay() {
            display.value = currentInput;
        }