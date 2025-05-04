// Reference type ---> object

const user: {
    firstName: string;
    middleName: string;
    lastName:string;
} = { 
    firstName: "Ibrahim",
    middleName: "Rahamath",
    lastName: "Ullah",
}
console.log(user.firstName);
{/*  second  example */}

const user1: {  
    firstName: string;
    middleName?: string; //Optional Type
    lastName:string;
}= {
    firstName: "Ibrahim",
    lastName: "Ullah",
}

console.log(user1.middleName);

{/* third Example*/}
const user2: {  
    firstName: string;
    middleName?: string; //Optional Type
    lastName:string;
    isMarried: boolean;
}= {
    firstName: "Ibrahim",
    lastName: "Ullah",
    isMarried: true,
}

console.log(user2);

{/* Fourth Example*/}
const user3: {  
    //company: string  // must required 
    firstName: string;
    middleName?: string; //Optional Type
    lastName:string;
    isMarried: boolean;
}= {
    
    firstName: "Ibrahim",
    lastName: "Ullah",
    isMarried: true,
}

console.log(user3.middleName);


{/* fifth Example*/}
const user4: {  
    company: "Programming Hero"  // literal types
    firstName: string;
    middleName?: string; //Optional Type
    lastName:string;
    isMarried: boolean;
}= {
    company: "Programming Hero",
    firstName: "Ibrahim",
    lastName: "Ullah",
    isMarried: true,
}

console.log(user4.company);

{/* Sixth Example*/}
const user5: {  
    readonly company: "Programming Hero"  // literal types
    firstName: string;
    middleName?: string; //Optional Type
    lastName:string;
    isMarried: boolean;
}= {
    company: "Programming Hero",
    firstName: "Ibrahim",
    lastName: "Ullah",
    isMarried: true,
}

console.log(user5.company);
