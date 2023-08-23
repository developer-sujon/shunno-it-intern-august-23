let n = 5;
let pattern = "";

for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= i - 1; j++) {
    pattern = pattern + "*";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
