function sum(a){
    return function (b){
        return function(c){
            return a + b + c
        }
    }
}
console.log(sum(5)(10)(15))