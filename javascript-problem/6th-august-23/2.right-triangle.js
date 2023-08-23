let n = 5;
let pattern = "";

for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= n - i; j++) {
    pattern = pattern + " ";
  }
  for (let k = 0; k <= i; k++) {
    pattern = pattern + "*";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
