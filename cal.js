// script.js

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let displayValue = '0';
let firstOperand = null;
let waitingForSecondOperand = false;
let operator = null;

function updateDisplay() {
    display.textContent = displayValue;
}

function handleButtonClick(value) {
    if (value === 'C') {
        displayValue = '0';
        firstOperand = null;
        waitingForSecondOperand = false;
        operator = null;
        updateDisplay();
        return;
    }

    if (value === '=') {
        if (firstOperand === null || operator === null) {
            return;
        }

        let secondOperand = parseFloat(displayValue);
        if (operator === '+') {
            displayValue = (firstOperand + secondOperand).toString();
        } else if (operator === '-') {
            displayValue = (firstOperand - secondOperand).toString();
        } else if (operator === '*') {
            displayValue = (firstOperand * secondOperand).toString();
        } else if (operator === '/') {
            displayValue = (firstOperand / secondOperand).toString();
        }

        firstOperand = null;
        operator = null;
        waitingForSecondOperand = false;
        updateDisplay();
        return;
    }

    if (['+', '-', '*', '/'].includes(value)) {
        if (operator && waitingForSecondOperand) {
            operator = value;
            return;
        }

        if (firstOperand === null) {
            firstOperand = parseFloat(displayValue);
        } else if (operator) {
            const result = calculate(firstOperand, operator, parseFloat(displayValue));
            displayValue = `${parseFloat(result.toFixed(7))}`;
            firstOperand = result;
        }

        waitingForSecondOperand = true;
        operator = value;
        updateDisplay();
        return;
    }

    if (waitingForSecondOperand) {
        displayValue = value;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === '0' ? value : displayValue + value;
    }

    updateDisplay();
}

function calculate(firstOperand, operator, secondOperand) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.getAttribute('data-value'));
    });
});

updateDisplay();
