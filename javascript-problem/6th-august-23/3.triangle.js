let n = 5;
let pattern = "";

for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    pattern = pattern + " ";
  }
  for (let k = 0; k <= i * 2; k++) {
    pattern = pattern + "*";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
