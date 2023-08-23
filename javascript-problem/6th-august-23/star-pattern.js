let n = 5;
let pattern = "";

for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n - 1; j++) {
    pattern = pattern + " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    pattern = pattern + "*";
  }
  pattern = pattern + "\n";
}

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    pattern = pattern + " ";
  }
  for (let k = 0; k < (n - i) * 2 - 1; k++) {
    pattern = pattern + "*";
  }
  pattern = pattern + "\n";
}
console.log(pattern);
