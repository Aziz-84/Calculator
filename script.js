const display = document.querySelector(".display");
const AC = document.querySelector(".AC");
const toggle = document.querySelector(".toggle");
const percent = document.querySelector(".percent");
const divide = document.querySelector(".divide");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const asterisk = document.querySelector(".asterisk");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const minus = document.querySelector(".minus");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const plus = document.querySelector(".plus");
const zero = document.querySelector(".zero");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");

let firstValue = [];
let secondValue = [];
let firstDisplayValue = [];
let secondDisplayValue = [];
let plusBtn = false;
let minusBtn = false;
let asteriskBtn = false;
let divideBtn = false;
let btnPressed = "";

function add(input1, input2) {
  return input1 + input2;
}

function sub(input1, input2) {
  return input1 - input2;
}

function mul(input1, input2) {
  return input1 * input2;
}

function div(input1, input2) {
  return input1 / input2;
}

function operate(operator, firstValue, secondValue) {
  console.log(operator, firstValue, secondValue);
  switch (operator) {
    case "+":
      return add(firstValue, secondValue);
    case "-":
      return sub(firstValue, secondValue);
    case "*":
      return mul(firstValue, secondValue);
    case "/":
      return div(firstValue, secondValue);
  }
}
minus.addEventListener("click", () => {
  minusBtn = true;
  btnPressed = "-";
});
plus.addEventListener("click", () => {
  plusBtn = true;
  btnPressed = "+";
});
asterisk.addEventListener("click", () => {
  plusBtn = true;
  btnPressed = "*";
});
divide.addEventListener("click", () => {
  plusBtn = true;
  btnPressed = "/";
});
equal.addEventListener("click", () => {
  let sum = operate(
    btnPressed,
    firstValue[firstValue.length - 1],
    secondValue[secondValue.length - 1]
  );

  display.textContent = sum;
});

function displayOperate(num) {
  if (!(minusBtn || plusBtn || asteriskBtn || divideBtn)) {
    console.log("1:displayOperate");
    firstDisplayValue = firstDisplayValue + num;
    display.textContent = firstDisplayValue;
    firstValue.push(Number(firstDisplayValue));
  } else if (minusBtn || plusBtn || asteriskBtn || divideBtn) {
    console.log("2:displayOperate");
    secondDisplayValue = secondDisplayValue + num;
    display.textContent = secondDisplayValue;
    secondValue.push(Number(secondDisplayValue));
  }
}
zero.addEventListener("click", () => {
  displayOperate(0);
});
one.addEventListener("click", () => {
  displayOperate(1);
});

two.addEventListener("click", () => {
  displayOperate(2);
});
three.addEventListener("click", () => {
  displayOperate(3);
});
four.addEventListener("click", () => {
  displayOperate(4);
});
five.addEventListener("click", () => {
  displayOperate(5);
});
six.addEventListener("click", () => {
  displayOperate(6);
});
seven.addEventListener("click", () => {
  displayOperate(7);
});
eight.addEventListener("click", () => {
  displayOperate(8);
});
nine.addEventListener("click", () => {
  displayOperate(9);
});

/*

equal.addEventListener("click", () => {
  const twoInput = num1Input.concat(num2Input);

  let sum = twoInput.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });

  console.log(sum);
  display.textContent = sum;
});

*/
