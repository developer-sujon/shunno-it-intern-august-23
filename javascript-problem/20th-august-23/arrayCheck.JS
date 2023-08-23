let arr1 = [1, 5, 7, 8];
let arr2 = [7, 5, 2, 8];

let isMatch = false;

if (arr1.length === arr2.length) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      isMatch = true;
    } else {
      isMatch = false;
      break;
    }
  }
} else {
  isMatch = false;
}

console.log(isMatch);
