// db.test.aggregate([ 
//     //stage-1
//     {$group : {_id: "$address.country", count: {$sum: 1}, showName: {$push: "$name" }}}
    
//     ])

db.test.aggregate([ 
    //stage-1
    {$group : {_id: "$address.country", count: {$sum: 1}, showFullDoc: {$push: "$$ROOT" }
      
    }
           
              
    },
     { 
             //stage-2
             $project: {
                 "showFullDoc.name": 1,
                 "showFullDoc.email":1,
                 "showFullDoc.phone":1,
                 
             }}
    ])