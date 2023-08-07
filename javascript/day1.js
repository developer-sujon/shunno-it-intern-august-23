// find the prime number
function isPrime(n){
    for(var i = 2; i < n; i++){
        if(n % i === 0){
            return `${n} is not a prime number.`
        }
    }
    return `${n} is a prime number.`
}
console.log(isPrime(332224331213131))


// find those number which is divided by 3 and 5
function dividation(){
    var numbers = []
    for(var i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            numbers.push(i)
        }
    }
    console.log(numbers)
}
dividation()


// this is star pattern
// var rows = prompt("Enter number of rows")
var rows = 5
var str = ""
starPattern(rows)

function starPattern(rows){
    for(var i = 1; i <= rows; i++){
        for(var j = rows ; j > i; j--){
            str += "&nbsp; "
        }
        for(var k = 0; k < i * 2 - 1; k++){
            str += "*"
        }
        str += "<br/>"
    }
    for(var i = rows - 1; i >= 1; i--){
        for(var j = i ; j < rows; j++){
            str += "&nbsp; "
        }
        for(var k = i * 2 - 1; k >= 1; k--){
            str += "*"
        }
        str += "<br/>"
    }
    document.write(str)
}


// SECOND PRACTICE TO MAKE DIAMOND PATTERN
var star = ''
for(var i = 1; i <= rows; i++){
    for(var k = 0; k < i ; k++){
        star += "*"
    }
    star += "<br/>"
}
for(var i = 1; i <= rows; i++){
    for(var j = rows ; j > i; j--){
        star += "&nbsp; "
    }
    for(var k = 0; k < i; k++){
        star += "*"
    }
    star += "<br/>"
}
document.write(star)

var star2 = ''
for(var i = 1; i <= rows; i++){
    for(var j = rows ; j >= i; j--){
        star2 += '&nbsp; '
    }
    for(var k = 1; k <= i * 2 -1; k++){
        star2 += '*'
    }
    star2 += "<br/>"
}
for(var i = rows - 1; i >= 1; i--){
    for(var j = i - 1; j < rows; j++){
        star2 += '&nbsp; '
    }
    for(var k = i * 2 -1; k >= 1; k--){
        star2 += '*'
    }
    star2 += "<br/>"
}
document.write(star2)