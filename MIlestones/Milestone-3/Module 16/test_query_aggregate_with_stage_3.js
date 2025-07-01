// db.test.aggregate([
//     {$unwind: "$friends"},
//     //stage-2
//     { 
//         $group: {_id: "$friends", count: { $sum : 1}}
//     }
//     ])

db.test.aggregate([
    // stage - 1
    
    {$unwind: "$interests"},
    { 
        $group: {_id: "$age", interestedPerAge: {$push: "$interests"}}
    }
     
    
    ])