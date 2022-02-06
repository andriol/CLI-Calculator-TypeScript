import { question } from "readline-sync";

type Operator = "*" | "-" | "/" | "+";

function main(): void {
  const firstNum: string = question("Enter a number:\n");
  const operator: string = question("Enter operator:\n");
  const secondNum: string = question("Enter second number:\n");

  // result validation
  const validate: boolean =
    isNum(firstNum) && operatorSigns(operator) && isNum(secondNum);
  if (validate) {
    const firstNumber: number = parseInt(firstNum);
    const secondNumber: number = parseInt(secondNum);
    const result = calculate(firstNumber, operator as Operator, secondNumber);
    console.log(result);
  } else {
    console.log("invalid input");
    main();
  }
}
//number validation
function isNum(str: string): boolean {
  const checkNum = parseInt(str);
  const isNumber: boolean = !isNaN(checkNum);
  return isNumber;
}
//calculation
function calculate(
  firstNumber: number,
  operator: Operator,
  secondNumber: number
) {
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
function operatorSigns(operator: string): boolean {
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
