const products = [
    {
        "id": "1",
        "variants": [
            {
                "name": "color",
                "fields": [
                    {
                        "name": "color/red",
                        "price": 100,
                        "code": "color/red"
                    }
                ]
            },
            {
                "name": "size",
                "fields": [
                    {
                        "name": "md",
                        "price": 90,
                        "code": "size/md"
                    },
                    {
                        "name": "xl",
                        "price": 290,
                        "code": "size/xl"
                    }
                ]
            }, {
                "name": "size",
                "fields": [
                    {
                        "name": "md",
                        "price": 90,
                        "code": "size/md"
                    },
                    {
                        "name": "xl",
                        "price": 290,
                        "code": "size/xl"
                    }
                ]
            }
        ]
    },
    {
        "id": "2",
        "variants": [
            {
                "name": "size",
                "fields": [
                    {
                        "name": "md",
                        "price": 90,
                        "code": "size/md"
                    },
                    {
                        "name": "xl",
                        "price": 290,
                        "code": "size/xl"
                    }
                ]
            },
            {
                "name": "color",
                "fields": [
                    {
                        "name": "color/red",
                        "price": 100,
                        "code": "color/red"
                    }
                ]
            }
        ]
    },
    {
        "id": "3",
        "variants": [
            {
                "name": "size",
                "fields": [
                    {
                        "name": "md",
                        "price": 90,
                        "code": "size/md"
                    },
                    {
                        "name": "xl",
                        "price": 290,
                        "code": "size/xl"
                    }
                ]
            },
            {
                "name": "color",
                "fields": [
                    {
                        "name": "color/red",
                        "price": 100,
                        "code": "color/red"
                    }
                ]
            }
        ]
    }
]


const result = products.map((product) => {
    let singleObject = {};
    singleObject.id = product.id;

    //flag variable
    const tempVar = []
   
     product.variants.map((variant) => {
        variant.fields.map(field=> {
            tempVar.push(field)
        })
    })
    singleObject.varients = tempVar;
    return singleObject
})

console.log(result)