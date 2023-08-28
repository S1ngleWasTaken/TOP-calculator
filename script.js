const numBtns = document.querySelectorAll('.num-btn');
const operatorBtns = document.querySelectorAll('.operator-btn')
const equalsBtn = document.querySelector('.equals-btn')
const clearBtn = document.getElementById('clear-btn')
const plusMinusBtn = document.getElementById('plus/minus-btn')
const percentBtn = document.getElementById('percent-btn')
const screen = document.querySelector('.screen')


let firstNumber = '';
let secondNumber = '';
let currentNumber = -1;
let operator;


let sum = function (num1, num2) {
    let result = num1 + num2;
    firstNumber = result;
    secondNumber = '';
    currentNumber *= -1;
    console.log(`currentNumber: ${currentNumber}`);
    console.log(result);
    return result
}
let subtract = function (num1, num2) {
    let result = num1 - num2;
    firstNumber = result;
    secondNumber = '';
    currentNumber *= -1;
    console.log(`currentNumber: ${currentNumber}`);
    console.log(result);
    return result
}
let divide = function (num1, num2) {
    if (num2 !== 0) {
        let result = num1 / num2;
        firstNumber = result;
        secondNumber = '';
        currentNumber *= -1;
        console.log(`currentNumber: ${currentNumber}`);
        console.log(result);
        return result
    } else {
        secondNumber = '';
        console.log('ERROR');
        return 'ERROR';
    }
}
let multiply = function (num1, num2) {
    let result = num1 * num2;
    firstNumber = result;
    secondNumber = '';
    currentNumber *= -1;
    console.log(`currentNumber: ${currentNumber}`);
    console.log(result);
    return result
}

let evaluate = function () {
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)
    switch (operator) {
        case '+':
            screen.textContent = sum(firstNumber, secondNumber);
            break;
        case '-':
            screen.textContent = subtract(firstNumber, secondNumber);
            break;
        case '/':
            screen.textContent = divide(firstNumber, secondNumber);
            break;
        case '*':
            screen.textContent = multiply(firstNumber, secondNumber);
            break;
    }
}

let clear = function () {
    firstNumber = '';
    secondNumber = '';
    currentNumber = -1;
    operator = '';
    console.clear();
    screen.textContent = '0';
}

let plusMinus = function(){
    switch (currentNumber) {
        case -1:
            firstNumber *= -1;
            console.log(`first number: ${firstNumber} (polarity change)`);
            break;
        case 1:
            secondNumber *= -1;
            console.log(`first number: ${firstNumber} (polarity change)`);
            break;
    }
    screen.textContent = Number(screen.textContent)*-1
}

let percent = function(){
    switch (currentNumber) {
        case -1:
            firstNumber /= 100;
            console.log(`first number: ${firstNumber} (percent change)`);
            screen.textContent = firstNumber;
            break;
        case 1:
            secondNumber /= 100;
            screen.textContent = secondNumber;
            console.log(`first number: ${firstNumber} (percent change)`);
            break;
    }
}

numBtns.forEach((button) => {
    button.addEventListener('click', function () {
        switch (currentNumber) {
            case -1:
                firstNumber += button.textContent;
                screen.textContent = firstNumber;
                console.log(`first number: ${firstNumber}`);
                break;
            case 1:
                secondNumber += button.textContent;
                screen.textContent = secondNumber;
                console.log(`second number: ${secondNumber}`);
                break;
        }
    })
})

operatorBtns.forEach((button) => {
    button.addEventListener('click', function () {
        if (secondNumber !== '') {
            evaluate()
        }
        operator = button.textContent;
        screen.textContent = operator;
        console.log(`operator: ${operator}`);
        currentNumber *= -1;
        console.log(`currentNumber: ${currentNumber}`);
    })
})

equalsBtn.addEventListener('click', evaluate)

clearBtn.addEventListener('click', clear)

plusMinusBtn.addEventListener('click', plusMinus)

percentBtn.addEventListener('click', percent)