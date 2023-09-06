let units = [
    {
        "_id": "64e71ce598e5e4ffcd4d91af",
        "name": "Ton",
    },
    {
        "_id": "64e71d1598e5e4ffcd4d91b3",
        "name": "Kilogram"
    },
    {
        "_id": "64e72204350b4694f2711bc2",
        "name": "Gram"
    },
    {
        "_id": "64e8b1584ec99aa8776a0687",
        "name": "Piece"
    }
]
let projects = [
    {
        "_id": "64e71fd356326c9d1991a601",
        "name": "Test Product",
        "units": [
            "64e71ce598e5e4ffcd4d91af",
            "64e71d1598e5e4ffcd4d91b3",
            "64b80787229bb5fa99311110",
            "64b807a1229bb5fa99311114"
        ],
    },
    {
        "_id": "64e71fda56326c9d1991a613",
        "name": "Test Product 2",
        "units": [
            "64e71ce598e5e4ffcd4d91af",
            "64e71d1598e5e4ffcd4d91b3"
        ]
    },
    {
        "_id": "64eefdfd864826a33b307007",
        "name": "realme 6i",
        "units": [
            "64e8b1584ec99aa8776a0687"
        ]
    },
]
// i want this products list to transformation products list example
// let results = [
//     {
//         "_id": "64e71fd356326c9d1991a601",
//         "product": "64e71fd356326c9d1991a601",
//         "name": "Test Product",
//         "units": [
//             {
//                 "unitId": "64e71ce598e5e4ffcd4d91af",
//                 "name": "Ton",
//             },
//             {
//                 "_id": "64e71d1598e5e4ffcd4d91b3",
//                 "name": "Kilogram"
//             },
//         ]
//     },
//     {
//         "_id": "64e71fd356326c9d1991a601",
//         "product": "64e71fd356326c9d1991a601",
//         "name": "Test Product",
//         "units": [
//             {
//                 "unitId": "64e71ce598e5e4ffcd4d91af",
//                 "name": "Ton",
//             },
//             {
//                 "unitId": "64e71d1598e5e4ffcd4d91b3",
//                 "name": "Kilogram"
//             },
//         ]
//     },
//     {
//         "_id": "64e71fd356326c9d1991a601",
//         "product": "64e71fd356326c9d1991a601",
//         "name": "Test Product",
//         "units": [
//             {
//                 "unitId": "64e71d1598e5e4ffcd4d91b3",
//                 "name": "Kilogram"
//             },
//             {
//                 "unitId": "64e72204350b4694f2711bc2",
//                 "name": "Gram"
//             },
//         ]
//     }
// ]

const result = projects.map(project => {
    let tempArr = []
    project.units.map(unit => {
        units.map(u => {
            if(u._id === unit){
                u.unitId = u._id;
                delete u._id
                tempArr.push(u)
            }
        })
    })
    project.units = tempArr;
    project.product = project._id;
    project.name = "Test Product";
    return project;
})
console.log(result)