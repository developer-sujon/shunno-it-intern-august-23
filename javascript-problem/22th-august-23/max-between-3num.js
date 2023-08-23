function max(arr) {
  let output;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      output = arr[i];
    }
  }
  return output;
}

console.log(max([23, 234234, 10]));
