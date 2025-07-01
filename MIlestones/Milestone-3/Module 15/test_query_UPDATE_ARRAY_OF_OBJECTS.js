db.test.find({_id : ObjectId("6406ad63fc13ae5a40000066")})
    .projection({})
    .sort({})
    .limit(0)
    
// db.test.updateOne(
//     {_id : ObjectId("6406ad63fc13ae5a40000066"),"education.major": "CSE"},
//     {
//         $set:{
//           "education.$.major": "History"  
//         }
        
//     })
    
// db.test.updateOne(
//     {_id : ObjectId("6406ad63fc13ae5a40000066")},
//     {
//         $inc:{
//          age: 1
//         }
        
//     })