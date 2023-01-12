let operator = null;
let numberA = null;
let numberB = null;

const result = document.getElementById("result");

result.textContent = "";

const numButtons = document.querySelectorAll(".number");
numButtons.forEach((button) => {
  button.addEventListener("click", (b) => {
    if (operator == null) {
      numberA = +b.target.textContent;
      result.textContent = result.textContent + b.target.textContent;
    } else if(operator != null && numberB == null) {
        result.textContent = +b.target.textContent;
        numberB = +b.target.textContent;
    } else {
        numberB = numberB + b.target.textContent;
        result.textContent = result.textContent + b.target.textContent;
    }
  });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((button) => {
  button.addEventListener("click", (o) => {
    result.textContent = o.target.textContent;
    operator = o.target.textContent;
  });
});

const equalButton = document.getElementById("equal");
equalButton.addEventListener("click", () => {
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
