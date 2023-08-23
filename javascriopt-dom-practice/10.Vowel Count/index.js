//Define UI Elements
const input = document.getElementById("input");
const button = document.getElementById("check");
const displayVowel = document.getElementById("displayVowel");

//Define Event listener
button.addEventListener("click", countVowel);

//Define Functions
function countVowel(e) {
  let count = 0;
  const words = input.value;
  words.split("").forEach((word) => {
    console.log(words);
    if (/^[aeiou]$/i.test(word)) {
      count++;
      displayVowel.innerHTML = `${words} has ${count} vowels`;
      displayVowel.style.color = `tomato`;
    } else {
      displayVowel.innerHTML = `${words} has No vowel`;
      displayVowel.style.color = `red`;
    }
  });
  input.value = "";
}
