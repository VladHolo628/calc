function calc(a, b, operator) {
  let isValidInput =
    typeof a === "number" &&
    typeof b === "number" &&
    typeof operator !== "undefined";

  if (isValidInput) {
    if (operator === "sum") {
      return a + b;
    } else if (operator === "minus") {
      return a - b;
    } else if (operator === "multy") {
      return a * b;
    } else if (operator === "divide") {
      return a / b;
    } else {
      return "Unknown operation";
    }
  }
  return "Error";
}
console.log(calc(20, 5, "divide"));
