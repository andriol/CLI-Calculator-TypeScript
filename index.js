"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var firstNum = (0, readline_sync_1.question)("Enter a number:\n");
    var operator = (0, readline_sync_1.question)("Enter operator:\n");
    var secondNum = (0, readline_sync_1.question)("Enter second number:\n");
    // result validation
    var validate = isNum(firstNum) && operatorSigns(operator) && isNum(secondNum);
    if (validate) {
        var firstNumber = parseInt(firstNum);
        var secondNumber = parseInt(secondNum);
        var result = calculate(firstNumber, operator, secondNumber);
        console.log(result);
    }
    else {
        console.log("invalid input");
        main();
    }
}
//number validation
function isNum(str) {
    var checkNum = parseInt(str);
    var isNumber = !isNaN(checkNum);
    return isNumber;
}
//calculation
function calculate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
    }
}
//operator validation
function operatorSigns(operator) {
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
main();
