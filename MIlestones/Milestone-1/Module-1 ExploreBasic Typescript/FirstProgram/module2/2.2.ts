{ 
    // interface

    type User1 = { 
        name:  string;
        age: number;
    }

    type rollNUmber = number;

    type UserWithRole = User1 & {role: string };

    const user2 : UserWithRole ={ 
        name: "Ibrahim",
        age: 34,
        role: "Admin"

    }

    interface UserWithRole2 extends User2{ 
        role: string;
    }

    interface User2 { 
        name: string;
        age: number; 
    }

    const user1 : User1 = { 
        name:" Ibrahim",
        age: 89,
    }

    const user3 : UserWithRole2 = { 
        name : "Ibrahim",
        age: 38,
        role: "Developer"
    }

   // js --> object, array-> object function -> object

     type  roll1 = number[];

     interface Roll2 { 
        [index: number] : number
     }

     const rollNumber1: Roll2 = [1, 2, 3]
                                // 0, 1, 2 ---> index  number type

     type Add1 = (num1: number, num2: number) => number  // function type
     interface Add2 {
        (num1: number, num2: number): number
     }


     const  add1: Add1 = (num1, num2) => num1 + num2;
     const  add: Add2 = (num1, num2) => num1 + num2;
    //
    //
}