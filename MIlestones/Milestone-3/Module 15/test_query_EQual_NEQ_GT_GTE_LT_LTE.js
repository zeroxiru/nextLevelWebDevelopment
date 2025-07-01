// db.test.find(
//     {gender: {$ne: "Male"}})
//     .projection({})
//     .sort({})
//     .limit(0)
    
// db.test.find(
//     {age: {$gt: 18}})
//     .projection({})
//     .sort({})
//     .limit(0)
    
// db.test.find(
//     {age: {$gte: 18}})
//     .projection({})
//     .sort({age: 1})
//     .limit(0)
    
db.test.find(
    {age: {$lte: 18}})
    .projection({})
    .sort({age: 1})
    .limit(0)
    
    
    