const display = document.getElementById("display");
const history = document.getElementById("history");

history.value = "";

display.value = 0;


function insertToDisplay(data) {
  const operators = ["+", "-", "*", "/"];
  const displayOperators = ["+", "-", "×", "/"];

  const currentValue = display.value.trimEnd();

  if (currentValue === "0" && data === "-") {
      display.value = "-";
      return;
  }

  if (operators.includes(data)) {
      const symbol = data === "*" ? "×" : data;
      const lastCharacter = currentValue.slice(-1);

      if (currentValue === "-") {
          return;
      }

      if (displayOperators.includes(lastCharacter)) {
          display.value =
              currentValue.slice(0, -1).trimEnd() + " " + symbol + " ";
      } else {
          display.value = currentValue + " " + symbol + " ";
      }
  } else if (currentValue === "0") {
      display.value = data;
  } else {
      display.value += data;
  }

  display.scrollLeft = display.scrollWidth;
}

function clearDisplay() {
  document.getElementById("display").value = 0;
  history.value = '';
}

function deleteDisplay() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);

  if (display.value === '') {
    display.value = "0"
  }
}

function result() {
  const expression = display.value;
  const calculation = expression.replaceAll("×", "*");

  try {
      const calculateResult = eval(calculation);

      history.value = expression;
      display.value = calculateResult;
  } catch {
      display.value = "error";
  }
}


let isLightTheme = false;


const calculator = document.getElementsByClassName("calculator")[0];
const toggleTheme = document.getElementById("toggle-theme")

calculator.classList.remove("light-theme")

function toggleThemes() {
  if (isLightTheme === false) {
    calculator.classList.add("light-theme")
    isLightTheme = true;
    toggleTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`
  } else {
    calculator.classList.remove("light-theme")
    isLightTheme = false;
    toggleTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`
  }
}

toggleTheme.addEventListener("click", () => {
  toggleThemes()
})