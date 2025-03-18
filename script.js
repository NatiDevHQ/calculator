const display = document.getElementById("display");
const history = document.getElementById("history");
const themeIcon = document.getElementById("theme-icon");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  history.textContent = "";
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const expression = display.value
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/\^/g, "**");
    const result = evaluateExpression(expression);
    history.textContent = `${display.value} = ${result}`;
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function evaluateExpression(expression) {
  const tokens = expression.match(/\d+\.?\d*|[\+\-\*\/%\^]/g);
  let result = parseFloat(tokens[0]);
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseFloat(tokens[i + 1]);
    switch (operator) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
      case "*":
        result *= operand;
        break;
      case "/":
        result /= operand;
        break;
      case "%":
        result = (result * operand) / 100;
        break;
      case "^":
        result = Math.pow(result, operand);
        break;
      default:
        throw new Error("Invalid operator");
    }
  }
  return result;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeIcon.textContent = isDark ? "☀️" : "🌙";
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.textContent = "☀️";
  }
});

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/[\d\.\+\-\*\/%\^]/.test(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLastCharacter();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
