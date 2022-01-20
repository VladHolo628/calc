function calc(a, b, operator) {
  let isValidInput =
    typeof a === "number" &&
    typeof b === "number" &&
    typeof operator !== "undefined" &&
    !isNaN(a) &&
    !isNaN(b);

  if (isValidInput) {
    switch (operator) {
      case "plus":
        return a + b;
      case "minus":
        return a - b;
      case "multy":
        return a * b;
      case "divide":
        return a / b;
      default:
        return "Unknown operation";
    }
  }
  return "Error";
}
console.log(calc(20, 5, "multy"));
