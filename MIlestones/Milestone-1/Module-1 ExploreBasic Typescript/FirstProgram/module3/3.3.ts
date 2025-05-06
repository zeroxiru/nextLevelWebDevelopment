{ 
    // type guard

    // typeof -->  type guard 
     type alphanumeric = string |number
    const add = (param1: alphanumeric, param2: alphanumeric ):
    alphanumeric =>
     { 
        if(typeof param1 === 'number' &&  typeof param2 === 'number')

        { 
            return  param1 + param2;
        }
        else { 
          return  param1.toString()  + param2.toString();
        }
     }
     const result1 = add('2', '9');
     console.log(result1);
    //
    //in guard

    type NormalUser = { 
        name: string
    }

    type AdminUser ={ 
        name: string;
        role: "admin";
    }
    const getUser = (user: NormalUser | AdminUser) => { 
        if('role' in user) { 
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else{
            console.log(`My name is ${user.name} `);

        }
       
    }

    const normalUser : NormalUser = { 
     name: "Mr. Sattar Khan"
    }

    const adminUser : AdminUser = { 
        name: "Mr. Ayoub Ali",
           role: "admin"
    }
   getUser(normalUser);
   getUser(adminUser);
}