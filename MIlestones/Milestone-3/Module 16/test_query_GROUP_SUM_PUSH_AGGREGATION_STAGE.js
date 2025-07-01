// db.test.aggregate([
//     //stage-1
//     {$group: {_id: "$age", count: {$sum: 1}}}
//     ]).sort({age :1})
    
// db.test.aggregate([
//     //stage-1
//     {$group: {_id: "$address.country", showName: {$push: "$name"}, count: {$sum: 1}}}
//     ])
    
// db.test.aggregate([
//     //stage-1
//     {$group: {_id: "$address.country", showName: {$push: "$$ROOT"}, count: {$sum: 1}}}
//     ])

db.test.aggregate([
    //stage-1
    {$group: {_id: "$address.country", showName: {$push: "$$ROOT"}, count: {$sum: 1}}},
    //stage-2
  {  $project: { 
        "showName.name": 1,
        "showName.email": 1,
        "showName.phone": 1,
    }}
    ])