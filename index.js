let addBtn = document.getElementById("add-btn");
let subtractBtn = document.getElementById("subtract-btn");
let multiplyBtn = document.getElementById("multiply-btn");
let divideBtn = document.getElementById("divide-btn");

let num1 = document.getElementById("number1-el");
let num2 = document.getElementById("number2-el");

let result = document.getElementById("result-el");

addBtn.addEventListener("click", function () {
  let sum = parseFloat(num1.value) + parseFloat(num2.value);
  result.innerText = String(sum);
});

subtractBtn.addEventListener("click", function () {
  let difference = parseFloat(num1.value) - parseFloat(num2.value);
  result.innerText = String(difference);
});

multiplyBtn.addEventListener("click", function () {
  let product = parseFloat(num1.value) * parseFloat(num2.value);
  result.innerText = String(product);
});

divideBtn.addEventListener("click", function () {
  let quotient = parseFloat(num1.value) / parseFloat(num2.value);
  result.innerText = String(quotient);
});
