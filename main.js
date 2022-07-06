const h1Element = document.getElementById("h1Element");
const form = document.getElementById("form");
let result = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(this);

  const firstNumber = parseInt(this.children[0].value);
  const operation = this.children[1].value;
  const secondNumber = parseInt(this.children[2].value);

  if (operation === "+") {
    result = firstNumber + secondNumber;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
  } else {
    result = firstNumber * secondNumber;
  }

  h1Element.innerText = result;
});
