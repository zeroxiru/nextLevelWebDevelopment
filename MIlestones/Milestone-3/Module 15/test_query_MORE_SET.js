
// db.test.find({})
//     .projection({})
//     .sort({})
//     .limit(0)

db.test.updateOne(
    {_id : ObjectId("6406ad63fc13ae5a40000065")},
    {$set:{
      "address.city": "Dhanmondi Road32, Dhaka",
      "address.country": "Bangladesh",
      "address.postalCode": 1209, 
      "address.state": "Dhaka" 
    }})