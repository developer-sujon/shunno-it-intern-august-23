//Define UI Elements
const btn = document.getElementsByClassName("btn-primary")[0];
const randColor = document.getElementById("randColor");

//Define Event listener
btn.addEventListener("click", generateColor);

//Define Functions
function generateColor(e) {
  const rand = Math.ceil(Math.random() * 1000000000)
    .toString(16)
    .slice(0, 6);
  randColor.innerHTML = `#${rand}`;
  document.querySelector("body").style.backgroundColor = `#${rand}`;
}
generateColor();
