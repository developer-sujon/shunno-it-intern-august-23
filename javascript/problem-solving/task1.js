
// problem 1 solution
let student = {
    name: "Sujon",
    age: 20,
    country: null,
    CGPA: 0,
}
let student2 = {}
for (let e in student) {

    if (student[e] !== null) {
        student2[e] = student[e]
    }
}
// console.log(student2)


// problem 2 solution
let arr1 = [2, 5, 7, 8]
let arr2 = [3, 5, 7, 8, 9]

for (let i of arr1) {
    for (let j of arr2) {
        if (i !== j) {
            // return console.log("Arr1 and Arr2 are not same")
        }
        else {
            // return console.log("Arr1 and Arr2 are same array")
        }
    }
}


// problem 3 solution
let num = -1200;
let strNum = num.toString()
let emptyStr = ''
for (var i = strNum.length - 1; i >= 0; i--) {
    emptyStr += strNum[i]
}
// console.log(parseFloat(emptyStr))


// problem 4 solution
let team = [20, 30, 40, 50, 55];
let nestedTeam = [];
for(var i = 0; i < team.length; i += 2){
    nestedTeam.push(team.slice(i, i+2))
}
// console.log(nestedTeam)




// problem 5 solution
let n = 10;
let totalCab = n;


    
    while(n > 2){
      let  freeCab = Math.floor(totalCab / 3);
      let  remaining = totalCab % 3;
        let sum = freeCab + remaining;
        n = sum;
        totalCab = totalCab + freeCab;
        if(n < 3){
            console.log(n);
        }
        
    }
    

console.log('totalCab',totalCab)


// let n = 12;
// let coke = n;

// while (n > 2) {
//   let remain_cap = n % 3;
//   let remain_coke = Math.floor(n / 3);
//   let total = remain_cap + remain_coke;
//   coke = coke + remain_coke;
//   n = total;
// }

// console.log("total coke " + coke);
// console.log("total cap " + n);





// let netBottles = 15;
// let remainingBottles = 0;
// let modulus = 0;
// if (netBottles >= 3) {
//     remainingBottles = Math.floor(netBottles / 3);
//     console.log(remainingBottles);
//     // if (netBottles % 3 !== 0) {
//     modulus = netBottles % 3;
//     console.log(modulus);
//     // }
//     let totalRemainingBottles = remainingBottles + modulus;
//     console.log(totalRemainingBottles);
//     if (totalRemainingBottles >= 3) {
//         remainingBottles = Math.floor(totalRemainingBottles / 3);
//         console.log(remainingBottles)
//         modulus = totalRemainingBottles % 3;
//         console.log('modulus', modulus)
//         remainingBottles += modulus;
//         if (remainingBottles === 3) {
//             remainingBottles = remainingBottles / 3;
//         }
//     } else {
//         remainingBottles = modulus;
//     }
// } else {
//     remainingBottles = modulus;
// }
// console.log('remainingBottles:', remainingBottles)






// for (let i = 1; i <= 12; i++) {
//     if (i % 3 === 0) {
//         totalCab += 1
//     }
// }
// console.log(totalCab)
// let remaining = totalCab / 3
// let modulas = remaining % 3
// console.log('remaning', remaining, 'modulas', modulas)
// for(var i = remaining; i > 3; i-=3){
//     totalCab += 1
// }
// if(modulas > 2 && modulas == 3){
//     totalCab += 1
//     modulas = modulas - 3
//     modulas = Math.floor(modulas)
//     // console.log('modular > 2', modulas)
// }
// else{
//     modulas = Math.ceil(modulas)
// }
// if(remaining >= 3 && remaining <= 5){
//     totalCab += 1
//     remaining = remaining - 3
// }
// else if(remaining >= 6 && remaining <= 8){
//     totalCab += 2
//     remaining = remaining - 6
// }
// console.log("TotalCab",totalCab, "Remaining Cab", modulas)





// function findTotalCab(){
// let totalCab = 10

// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0) {
//         totalCab += 1
//     }
// }
// let remaining = totalCab / 3
// console.log('remaning', remaining)

// for (var i = 0; i <= remaining; i+3) {
//     // if (i % 3 === 0) {
//         totalCab += 1
//         // if(remaining > 3){
//             remaining = remaining - 3
//         // }
        
//     // }
// }

// if(remaining >= 3 && remaining <= 5){
//     totalCab += 1
//     remaining = remaining - 3
// }
// else if(remaining >= 6 && remaining <= 8){
//     totalCab += 2
//     remaining = remaining - 6
// }
// console.log(totalCab, Math.floor(remaining))
// }


