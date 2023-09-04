const unitInfo = {
    unitQuantity: { cartoon: 5, box: 25, price: 100 },
    unitPrice: { cartoon: 500, box: 50 }
}

const result = Object.keys(unitInfo.unitQuantity).reduce((acc, curr) => {
    return acc + unitInfo.unitQuantity[curr] * unitInfo.unitPrice[curr]
}, 0)
// console.log(result)
// console.log(5*500 + 25*50 + 100)
// console.log(5*500 + 25*50 + 100)

// console.log('first')
// setTimeout(() => {
// console.log('second')
// }, 0);
// console.log('third')
