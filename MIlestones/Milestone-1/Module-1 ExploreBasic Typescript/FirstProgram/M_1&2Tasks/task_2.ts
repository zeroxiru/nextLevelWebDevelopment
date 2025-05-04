// Task 2: Functions, Optional, and Literal Types
// Objective: Create a function with parameters and an optional literal type.

// Instructions:

// Define a function that takes:
// name (string)
// age (number)
// role (optional, with type 'admin' | 'user' | 'guest')
// The function should log these values or perform a basic action.

type Role = 'admin' | 'user'| 'guest' ;

const printUserInfo = (

name: string,
age: number,
role?: Role
): void => {
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
if(role)
{
    console.log(`Role:${role}` );
}
else{
console.log(`Name: ${name}`);
}
}

printUserInfo("Ibrahim", 34, 'admin');
printUserInfo("Ibrahim", 34); // without role