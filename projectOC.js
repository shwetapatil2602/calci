let displayValue = "";

function updateDisplay() {
  const display = document.getElementById("display");
  display.innerText = displayValue || "0";
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function appendNumber(num) {
  if (num === "." && displayValue.includes(".")) return; // Prevent multiple decimals
  displayValue += num;
  updateDisplay();
}

function appendOperator(operator) {
  if (["+", "-", "*", "/", "%"].includes(displayValue.slice(-1))) return; // Prevent consecutive operators
  displayValue += operator;
  updateDisplay();
}

function calculateSqrt() {
  if (displayValue) {
    const result = Math.sqrt(parseFloat(displayValue));
    displayValue = result.toString();
    updateDisplay();
  }
}

function calculateResult() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
    setTimeout(clearDisplay, 1500);
  }
}
