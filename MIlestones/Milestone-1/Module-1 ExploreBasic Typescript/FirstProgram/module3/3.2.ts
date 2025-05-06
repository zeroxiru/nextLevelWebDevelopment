{  
// inheritance

class Parent{ 
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string ) {
        this.name = name;
        this.age = age;
        this.address = address;
        
        
    }
    getSleep(numberOfHours: number ){ 
        console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
}

class Student extends Parent{  
  
    constructor(name: string, age: number, address: string ) {
    super(name, age, address)
    }
}
const student1 = new Student("Ibrahim", 38, "Naumala Babur Hat, Bauphal, ")
student1.getSleep(6)


// teacher class
class Teacher extends Parent{  

    designation: string;

constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address)
    this.designation = designation;
   
    
}
getSleep(numberOfHours: number ){ 
    console.log(`${this.name} will sleep for ${numberOfHours}`);
}
takeClass(numberOfClass: number){ 
    console.log(`${this. name} will take number of class is ${numberOfClass}`);
}

//
}
const teacher = new Teacher("Ibrahim", 38, "Naumala Babur Hat, Bauphal", "Professor");
teacher.takeClass(5)
}