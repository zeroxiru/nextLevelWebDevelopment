// Task 9: Optional Chaining
// Objective: Use optional chaining with nested objects.

// Instructions:

// Write a function getEmployeeCity(employee) that safely retrieves the city of an employee from a nested object using optional chaining.
{
type  User = { 
    name: string;
    email: string;
    age: number;
    address?: { 
        area?: string;
        city?: string;
        zipcode?: number;
    }
}

const user1= {
       name: "Ibrahim",
    email: 'i@gmail.com',
    age: 32,
    address: { 
        area: "Dhanmondi 32",
        city: "Dhaka",
        zipcode: 1209,
    }
}

const user2= {
       name: "Ibrahim",
    email: 'i@gmail.com',
    age: 32,
    address: { 
        area: null,
        city: null,
        zipcode: 1209,
    }
}

function getEmployeeCity(User){

    return `Name: ${User.name},Email: ${User.email},City: ${User.address?.city},ZipCode: ${User.address?.zipcode},`
}

console.log(getEmployeeCity(user1));
console.log(getEmployeeCity(user2));

}