function findMaxNum(arr){
    let maxNum = arr[0]
    arr?.map(a => {
        if(maxNum < a){
            maxNum = a
        }
    })
    return maxNum
}
console.log(findMaxNum([5,15,0,7,9]))