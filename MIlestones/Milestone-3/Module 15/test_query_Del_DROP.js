// db.test.insert({name: "something"})
// db.test.find({name : {$eq: "something"}})
//     .projection({})
//     .sort({})
//     .limit(0)
    
//  db.test.deleteOne({_id : ObjectId("68541b6afcf443fba18cb698")})
 db.testdb.drop({writeConcern: {w: 1} })