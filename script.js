let operator = null;
let numberA = null;
let numberB = null;

const result = document.getElementById("result");

result.textContent = "";

const numButtons = document.querySelectorAll(".number");
numButtons.forEach((button) => {
  button.addEventListener("click", (b) => {
    result.textContent = result.textContent + b.target.textContent;
  });
});

const dotButton = document.getElementById("dot");
dotButton.addEventListener("click", () => {
  if (!result.textContent.includes(".")) {
    result.textContent = result.textContent + ".";
  }
});

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
  button.addEventListener("click", (o) => {
    numberA = +result.textContent;
    result.textContent = "";
    operator = o.target.textContent;
  });
});

const equalButton = document.getElementById("equal");
equalButton.addEventListener("click", () => {
  numberB = +result.textContent;
  result.textContent = `${operate()}`;
  operator = null;
});

function operate() {
  switch (operator) {
    case "+":
      return numberA + numberB;
    case "-":
      return numberA - numberB;
    case "x":
      return numberA * numberB;
    case "/":
      return numberA / numberB;
  }
}
