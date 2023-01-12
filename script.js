const result = document.getElementById("result");

result.textContent = "";

const numButtons = document.querySelectorAll(".number");
numButtons.forEach((button) => {
  button.addEventListener("click", (b) => {
    result.textContent = result.textContent + b.target.textContent;
  });
});
