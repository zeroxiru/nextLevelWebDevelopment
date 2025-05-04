{ 

    // type alias

    type student ={
        name: string,
        age: number,
        gender: string,
        contactNo?: string,
        address: string,
    }
    const student1: student = { 
        name: "Ibrahim",
        age: 29,
        gender: "Male",
        contactNo: "01720267002",
        address: "Dhanmondi",

     }

     const student2: student = { 
        name: "Zohan",
        age: 5,
        gender: "Male",
        address: "Moghbazar",

     }

     type UserName = string;
     type IsAdmin = boolean;
     const userName: UserName = "Ibrahim";
     const isAdmin: IsAdmin = true;

     type Add = (num1:number, num2:number) => number;

     const add:Add = (num1, num2) => num1 + num2;
}