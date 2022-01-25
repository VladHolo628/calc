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
console.log(calc(20, 10, "div"));
