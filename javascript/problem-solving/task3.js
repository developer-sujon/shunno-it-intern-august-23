let units = [
    {
        id:1,
        name:'ton',
    },
    {
        id:2,
        name:'box',
    },
    {
        id:3,
        name:'pice',
    }
]

let products = [
    {
        id:1,
        name:'Elsa Luxury Digital Printed Unstiched Kurti',
        unitId: 3,
        price: 10
    },
    {
        id:2,
        name:'Sunehri Luxury Printed 3pcs',
        unitId: 2,
        price: 30
    },
    {
        id:3,
        name:'Sunehry VOL-6 Digital Printed Unstitched 3pcs',
        unitId: 2,
        price: 50,
    },
    {
        id:3,
        name:'Sunehry VOL-6 Digital Printed Unstitched 3pcs',
        unitId: 1,
        price: 0,
    }
]

const result = products.map(product => {
    
    units.map((unit) => {
        if(product.unitId === unit.id){
            product.unitInfo = unit
            delete product.unitId
        }
    })
    return product
    
})
console.log(result)