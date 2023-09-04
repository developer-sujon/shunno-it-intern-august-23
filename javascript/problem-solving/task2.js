// problem 1 solution
const devs = [
    { name: "Nahid", id: 1001, team: "Hisabnikash" },
    { name: "Sujon", id: 1002, team: "Hisabnikash" },
    { name: "Akbor", id: 1003, team: "Hisabnikash" },
];
const newDevs = {};
devs.map((dev) => {
    // console.log([dev.id])
    { newDevs[dev.id] = dev };
    delete newDevs[dev.id].id;
})
// console.log(newDevs)



// problem 2 solution
const nums = [1, 2, 3, 3, 14, 14, 4, 8, 20, 20, 5, 14];

for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
            for (var k = j; k < nums.length; k++) {
                nums[k] = nums[k + 1];
                // console.log(nums[k])
            }
            nums.length--;
            j--;
        }
        if (nums[i] < nums[j]) {
            let swap = nums[i]
            nums[i] = nums[j]
            nums[j] = swap
        }
    }
}
console.log(nums);



// problem 3 solution
const arraySort = (arr) => {
    for (var a = 0; a < arr.length - 1; a++) {
        for (var b = a + 1; b < arr.length; b++) {
            if (arr[a] > arr[b]) {
                let swap = arr[a];
                arr[a] = arr[b];
                arr[b] = swap;
            }
        }
    }
    return arr;
}

const isAnagram = (string1, string2) => {
    let str1Array = string1.toLowerCase().split('');
    let str2Array = string2.toLowerCase().split('');
    arraySort(str1Array);
    arraySort(str2Array);
    return (str1Array.join('') === str2Array.join(''))
}
console.log(isAnagram("hello", "HEllo"))







// const isAnagram = (string1, string2) => {
//     let str1Array = string1.toLowerCase().split('')
//     let str2Array = string2.toLowerCase().split('')
//     for (var a = 0; a < str1Array.length - 1; a++) {
//         for (var b = a + 1; b < str1Array.length; b++) {
//             if (str1Array[a] > str1Array[b]) {
//                 let swap = str1Array[a];
//                 str1Array[a] = str1Array[b];
//                 str1Array[b] = swap;
//             }
//         }
//     }
//     for(var a = 0; a < str2Array.length - 1; a++){
//         for(var b = a + 1; b < str2Array.length; b++){
//             if(str2Array[a] > str2Array[b]){
//                 let swap = str2Array[a];
//                 str2Array[a] = str2Array[b];
//                 str2Array[b] = swap;
//             }
//         }
//     }
//     return (str1Array.join('') === str2Array.join(''))
// }
// console.log(isAnagram("fruit", "falll"))