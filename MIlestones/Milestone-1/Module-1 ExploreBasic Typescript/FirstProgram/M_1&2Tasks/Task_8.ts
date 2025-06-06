// Task_8.ts 
// Objective: Practice using intersection types.

// Instructions:

// Create a type AdminUser that is an intersection of:
// User with properties name and email
// Admin with property adminLevel
// Write a function describeAdmin(user: AdminUser): string that
// returns a description of the admin user.


{
    type User = {
        name: string;
        email: string;
        
    }
    type Admin = {
        adminLevel: number;
    }
    type AdminUser = User & Admin;


    function describeAdmin(user: AdminUser): string { 
        return `Admin Name: ${user. name}, Email: ${user.email}, Level: ${user.adminLevel}`

    }

    // Example usage
const admin: AdminUser = {
  name: "Ibrahim",
  email: "ibrahim@example.com",
  adminLevel: 3
};

console.log(describeAdmin(admin));

}