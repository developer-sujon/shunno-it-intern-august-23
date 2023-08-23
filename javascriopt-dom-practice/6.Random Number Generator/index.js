//Define UI Elements
const btn = document.getElementsByClassName("btn-primary")[0];
const randNumber = document.getElementById("randNumber");

//Define Event listener
btn.addEventListener("click", generateNumber);

//Define Functions
function generateNumber(e) {
  const rand = Math.floor(Math.random() * 100) + 1;
  randNumber.innerHTML = rand;
}
generateNumber();
