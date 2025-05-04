{
// ternary operator || optinal Chaining || nullish coalescing operator


const age: number = 19;
if(age >=18) { 
    console.log("Adult");
}
else { 
    console.log("Not Adult");
}

const isAdult = age >=18 ? 'Adult': 'Not Adult';
console.log({isAdult});

// nullish coalescing operator


// null and undefined -----> decision making
const isAuthenticated = undefined;
const result1 = isAuthenticated ?? "Guest" 
console.log({result1});

}

