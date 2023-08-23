const nums = [1, 2, 3, 3, 14, 14, 14, 4, 8, 20, 5, 14];

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    // sort array in descending order
    if (nums[i] < nums[j]) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }

    //remove duplicate value from nums array
    if (nums[i] === nums[j]) {
      for (let k = j; k < nums.length; k++) {
        nums[k] = nums[k + 1];
      }
      nums.length--;
      j--;
    }
  }
}
console.log(nums);
