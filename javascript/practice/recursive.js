function sayHi(n){
    if(n === 0){
        return;
    }
    console.log("Hello from Bayshakhe", n)
    sayHi(n - 1)
}
sayHi(3)

function sum(n){
    if(n === 1){
        return 1
    }
    return n + sum(n - 1)
}
console.log(sum(5))

function multiply(n){
    if(n < 1){
        return 1;
    }
    return n * multiply(n-1)
}
console.log(multiply(5))

function arrSum(arr, lastIndex){
    if(lastIndex < 0){
        return 0;
    }
    return arr[lastIndex] + arrSum(arr, lastIndex - 1)
}
const arr = [12,10,10]
console.log(arrSum(arr, arr.length - 1))