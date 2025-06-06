{// Task 16: Utility Types and Keyof Constraints
// Objective: Access object properties dynamically using keyof.

// Instructions:

// Create a function that:
// Takes an object and a key.
// Returns the property value from the object based on the provided key.
// Use keyof to constrain the key to valid properties of the object.



const  getPropertyValue =<X, Y extends keyof X> (obj: X,  key: Y): X[Y]=>{ 
    return obj[key];

}
const  user ={ 
    name: "Ibrahim",
    age: 34,
    address: "Dhanmondi Dhaka"
}
const result1 = getPropertyValue(user, "name")
console.log(result1);

const result2 = getPropertyValue(user, "age")
console.log(result2);

const result3 = getPropertyValue(user, "address")
console.log(result3);


}