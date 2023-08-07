let arr = [4, 5, 9, 2, 79, 33]

// Array sorting in accending way
function accArray(arr){
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j <= arr.length; j++) {
            // console.log(arr[j])
            if (arr[i] > arr[j]) {
                let swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
    return arr;
}
console.log(accArray(arr));


// array sorting in descending way
function decArray(arr){
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
    return arr;
}
console.log(decArray(arr));

