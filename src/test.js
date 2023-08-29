let subTotal = 0
const obj = {
    quantity: { '64e71ce598e5e4ffcd4d91af': 5, '64e71d1598e5e4ffcd4d91b3': 2 },
    salePrice: { '64e71ce598e5e4ffcd4d91af': 100, '64e71d1598e5e4ffcd4d91b3': 15 }
}
for (let a in obj.quantity) {
    Object.values(obj).reduce((acc, curr) => {
        // console.log(acc[a], curr[a])
        subTotal += acc[a] * curr[a]
    })
}
console.log(subTotal)



// let subTotal =  0
// const obj = {
//     quantity:  {'64e71ce598e5e4ffcd4d91af': 5, '64e71d1598e5e4ffcd4d91b3': 2},
//     salePrice: {'64e71ce598e5e4ffcd4d91af': 100, '64e71d1598e5e4ffcd4d91b3': 15}
// }
// for(let a in obj.quantity){
//     // console.log(obj.quantity[a])
//     // const product = obj.quantity[a]
//     // const price = obj.salePrice[a]
//     // subTotal += product * price
//     Object.values(obj).reduce((acc,curr)=>{
//         // console.log(acc[a], curr[a])
//         subTotal += acc[a] * curr[a]
//     })
// }
// console.log(subTotal)



// const objValues = Object.values(obj)
// // console.log(objValues)
// for(let a in objValues){
//     // console.log(10, objValues[a])
//     for(let b in objValues[a]){
//         // console.log(obj.quantity[b])
//         // console.log(12, (objValues[a])[b])
//         // console.log(13, Object.keys(objValues[a])[0])
//         // console.log(14, b)
//         // if(a === b){
//         //     console.log(b, "a+b", a)
//         // }
//         // else{
//         //     console.log(b, "a-b", a)
//         // }
//         for(let c of Object.keys(objValues[a])){
//             // console.log(15, Object.keys(objValues[a]))
//             // console.log(c)
//             if(b === c){
//                 console.log((objValues[a])[b], (objValues[a])[b])
//                 // console.log((objValues[a])[b] * (objValues[a])[b])
//                 // console.log(26, obj.quantity[c], c)
//             }
//         }
//     }
// }



// for(var i = 0; i < objValues.length; i++){
//     console.log("8 no line",Object.keys(objValues[i]))
//     console.log("9 no line",objValues[i])
//     // for(var j = i; j < Object.keys(objValues[i]).length; j++){
//     //     const propertyObj = Object.keys(objValues[i])[j]
//     //     // console.log(Object.keys(objValues[i])[j])
//     //     console.log("14 no line",objValues[j][propertyObj])
//     //     // console.log(12, objValues[i][propertyObj])
//     //     // console.log(13, Object.keys(objValues[i])[propertyObj])
//     // }
// }



// for(let a of values){
//     // console.log(values[a]['64e71ce598e5e4ffcd4d91af'])
//     // console.log(Object.keys(values[a]))
//     // const reduceValue = (Object.keys(values[a])).reduce((acc, curr) => acc + curr)
//     // console.log(Object.keys(values[a])[0])
//     // console.log(Object.values(values[a]))
//     console.log(Object.keys(a)[0])
// }
// // console.log(values)