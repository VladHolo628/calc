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

import {
  buttons,
  clearButton,
  deleteButton,
  equalsButton,
  output,
} from "./view.js";

const avaliableNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const avaliableOperations = {
  "+": "sum",
  "-": "sub",
  "÷": "div",
  "×": "multi",
};
const defaultValue = "0";
let first = "";
let second = "";
let sign;

clearButton.addEventListener("click", () => {
  first = "";
  second = "";
  output.textContent = defaultValue;
});

deleteButton.addEventListener("click", () => {
  if (output.textContent.length === 1) {
    if (!sign) {
      first = "";
      output.textContent = defaultValue;
    } else {
      second = "";
      output.textContent = defaultValue;
    }
  } else {
    if (!sign) {
      first = first.slice(0, -1);
      output.textContent = first;
    } else {
      second = second.slice(0, -1);
      output.textContent = second;
    }
  }
});
equalsButton.addEventListener("click", () => {
  if (first && second && sign) {
    output.textContent = calc(parseInt(first), parseInt(second), sign);
    first = output.textContent;
    second = "";
    sign = null;
  }
});

for (let btn of buttons) {
  btn.addEventListener("click", (event) => {
    let currentButton = event.target.textContent.trim();

    let passBtn = function (btn) {
      output.textContent = "";
      switch (btn) {
        case first:
          first += currentButton;
          output.textContent = first;
          break;
        case second:
          second += currentButton;
          output.textContent = second;
          break;
        case sign:
          sign = avaliableOperations[currentButton];
          output.textContent = currentButton;
          break;

        default:
          "Error";
      }
    };
    const isFirstNumber = avaliableNumbers.includes(currentButton) && !sign;
    const isSign = currentButton in avaliableOperations;
    const isSecondNumber = avaliableNumbers.includes(currentButton) && sign;

    if (isFirstNumber) {
      passBtn(first);
    } else if (isSecondNumber) {
      passBtn(second);
    } else if (isSign) {
      passBtn(sign);
    }
  });
}
