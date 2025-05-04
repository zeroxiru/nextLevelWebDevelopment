{ 
    // generic constraint with key of operator

    type Vehicle = { 
      bike:string
      car:string
      ship:string
    }

    type Owner = "bike" | "car" | "ship" // manually

    type Owner2 = keyof Vehicle

    const person1 : Owner2 = "car";

    const user = { 
        name: "E",
        age: 23,
        address: "dhaka"
    }
    const user1 = { 
        name: "E",
        age: 23,
        address: "dhaka",
        email: "u@email.com"
    }

    // user['age'] 
    const getPropertyValue = <X, Y extends keyof X >(obj: X, key: Y)=>{ 
    return obj[key]
    }

    const result1 = getPropertyValue(user1, 'name')
    
    //


}