let firstNumber = Number(prompt("Enter the first number"));
let secondNumber = Number(prompt("Enter the second number"));
if (firstNumber > secondNumber) {
  alert(firstNumber);
} else if (secondNumber > firstNumber) {
  alert(secondNumber);
} else {
  alert("Equals");
}
