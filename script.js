const numBtns = document.querySelectorAll('.num-btn');
const operatorBtns = document.querySelectorAll('.operator-btn')
const equalsBtn = document.querySelector('.equals-btn')


let firstNumber = '';
let secondNumber = '';
let currentNumber = -1;
let operator;

let sum = function (num1, num2) {
    let result = num1 + num2;
    firstNumber = result;
    secondNumber = '';
    currentNumber *= -1;
    return result
}
let subtract = function (num1, num2) {
    let result = num1 - num2;
    firstNumber = result;
    secondNumber = '';
    currentNumber *= -1;
    return result
}
let divide = function (num1, num2) {
    if (num2 !== 0) {
        let result = num1 / num2;
        firstNumber = result;
        secondNumber = '';
        currentNumber *= -1;
        return result
    } else {
        secondNumber = ''
        return 'you cannot divide by zero';
    }
}
let multiply = function (num1, num2) {
    let result = num1 * num2;
    firstNumber = result;
    secondNumber = '';
    currentNumber *= -1;
    return result
}

let evaluate = function () {
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)
    switch (operator) {
        case '+':
            console.log(sum(firstNumber, secondNumber));
            break;
        case '-':
            console.log(subtract(firstNumber, secondNumber));
            break;
        case '/':
            console.log(divide(firstNumber, secondNumber));
            break;
        case '*':
            console.log(multiply(firstNumber, secondNumber));
            break;
    }
}

numBtns.forEach((button) => {
    button.addEventListener('click', function () {
        switch (currentNumber) {
            case -1:
                console.log(firstNumber);
                firstNumber += button.textContent;
                console.log(`first number: ${firstNumber}`);
                break;
            case 1:
                secondNumber += button.textContent
                console.log(`second number: ${secondNumber}`);
                break;
        }
    })
})

operatorBtns.forEach((button) => {
    button.addEventListener('click', function () {
        let result
        if (secondNumber !== '') {
            result = evaluate()
        }
        operator = button.textContent;
        console.log(`operator: ${operator}`);
        currentNumber *= -1;
        return result;
    })
})

equalsBtn.addEventListener('click', evaluate)