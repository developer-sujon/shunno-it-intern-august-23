// problem 5 solution
let m = 21;
let totalCan = m;

while(m > 2){
    let remainingCan = Math.floor(m / 3);
    let modulas = m % 3;
    let total = remainingCan + modulas;
    totalCan = totalCan + remainingCan;
    m = total;
}
console.log("Total Can", totalCan, 'Reamaining', m);