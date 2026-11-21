// Each operation has its own function as required by the milestone.
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero. Please enter a non-zero second number.");
  }
  return a / b;
}

function calculate(a, b, operation) {
  switch (operation) {
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "*": return multiply(a, b);
    case "/": return divide(a, b);
    default: throw new Error("Please choose a valid operation.");
  }
}

const firstInput = document.getElementById("a");
const secondInput = document.getElementById("b");
const resultElement = document.getElementById("result");
const operationsElement = document.getElementById("operations");

function showResult(message, isError = false) {
  resultElement.textContent = message;
  resultElement.classList.toggle("error", isError);
}

operationsElement.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-op]");
  if (!button) return;

  const firstValue = firstInput.value.trim();
  const secondValue = secondInput.value.trim();

  if (firstValue === "" || secondValue === "") {
    showResult("Please enter both numbers before calculating.", true);
    return;
  }

  const a = Number(firstValue);
  const b = Number(secondValue);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    showResult("Please enter valid finite numbers.", true);
    return;
  }

  try {
    const answer = calculate(a, b, button.dataset.op);
    showResult(`Answer: ${answer}`);
  } catch (error) {
    showResult(error.message, true);
  }
});
