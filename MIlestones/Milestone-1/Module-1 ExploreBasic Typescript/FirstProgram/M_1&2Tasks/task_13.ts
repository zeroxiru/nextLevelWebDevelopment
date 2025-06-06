// Task 13: Generics with Functions and Interfaces
// Objective: Use generics to handle different types.

// Instructions:

// Create a generic function that:
// Accepts an array of any type.
// Returns a new array with duplicate values removed. 

//
interface User {
id: number,
name: string
}
const removeDuplicate =<T> (arr: T[]): T[] => { 
   const uniqueItems = new Set(arr);
    return Array.from(uniqueItems);
}

const numbers = [11, 2, 45, 2, 65]
const uniqueNumbers = removeDuplicate(numbers);
console.log("unique Numbers", uniqueNumbers);

const  users: User[] =[
    {  id: 1, name: "ibrahim" },
    {  id: 2, name: "Zohan" },
    {  id: 1, name: "ibrahim" }
]
const removeDuplicateUsers = (arr: User[]): User[] => { 
    const map = new Map<number, User>();
    arr.forEach((user) => { 
        map.set(user.id, user);
    })
    return Array.from(map.values());
}

const uniqueUsers = removeDuplicateUsers(users);
console.log("Unique Users By Id:", uniqueUsers);

 

