function calc(a, b, operator) {
  const operations = {
    sum: a + b,
    sub: a - b,
    multi: a * b,
    div: a / b,
  };

  const isValidInput =
    typeof a === "number" &&
    typeof b === "number" &&
    typeof operator !== "undefined";

  const operatorExist = [operator] in operations;

  if (isValidInput) {
    if (operatorExist) {
      return operations[operator];
    } else {
      return "Unknown operation";
    }
  }
  return "Error";
}

const buttons = document.querySelectorAll(".calc__button");
const clearButton = document.querySelector(".calc__button--clear");
const deleteButton = document.querySelector(".calc__button--delete");
const equalsButton = document.querySelector(".calc__button--equals");
const output = document.querySelector(".calc__result");
const avaliableNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const avaliableOperations = ["+", "-", "÷", "×"];
let first = "";
let second = "";
let sign = "";

function convertOperator(operator) {
  switch (operator) {
    case "+":
      return "sum";

    case "-":
      return "sub";

    case "×":
      return "multi";

    case "÷":
      return "div";

    default:
  }
}
clearButton.addEventListener("click", () => {
  first = "";
  second = "";
  output.textContent = "0";
});

deleteButton.addEventListener("click", () => {
  if (output.textContent.length === 1) {
    if (sign === "") {
      first = "";
      output.textContent = "0";
    } else {
      second = "";
      output.textContent = "0";
    }
  } else {
    if (sign === "") {
      first = first.slice(0, -1);
      output.textContent = first;
    } else {
      second = second.slice(0, -1);
      output.textContent = second;
    }
  }
});
equalsButton.addEventListener("click", () => {
  if (first !== "" && second !== "" && sign !== "") {
    output.textContent = calc(+first, +second, convertOperator(sign));
    first = output.textContent;
    second = "";
    sign = "";
  }
});
for (let btn of buttons) {
  btn.addEventListener("click", (event) => {
    let currentButton = event.target.textContent.trim();
    if (avaliableNumbers.includes(currentButton) && sign === "") {
      output.textContent = "";
      first += currentButton;
      output.textContent = first;
    }
    if (avaliableOperations.includes(currentButton)) {
      output.textContent = "";
      sign += currentButton;
      output.textContent += currentButton;
    }
    if (avaliableNumbers.includes(currentButton) && sign !== "") {
      output.textContent = "";
      second += currentButton;
      output.textContent += second;
    }
  });
}
