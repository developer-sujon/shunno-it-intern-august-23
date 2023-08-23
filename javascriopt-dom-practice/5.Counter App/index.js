//Define UI Elements

const display = document.getElementById("display");
let intDisplay = parseInt(display.innerText);

const subtract = () => {
  let intDisplay = parseInt(display.innerText);
  display.innerText = intDisplay - 1;
  display.style.color = intDisplay < 0 ? "red" : "black";
};

const addition = () => {
  let intDisplay = parseInt(display.innerText);
  display.innerText = intDisplay + 1;
  display.style.color = intDisplay < 0 ? "red" : "green";
};
const reset = () => {
  display.innerText = "0";
  display.style.color = "black";
};
