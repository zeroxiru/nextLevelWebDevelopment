{
    //
    class Person { 

        getSleep(): void{ 
            console.log("I am sleeping for 8 hours");

        }
    }

    class Student extends Person 
    { 
        getSleep(): void {
            console.log(" I am sleeping for 7 hours");
        }
    }
    class Developer extends Person { 
        getSleep(): void { 
            console.log("I am sleeping for 6 hours");
        }
    }

    const getSleepingHours = (param: Person) => { 
        param.getSleep();
    }

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);

    class Shape{ 

        calculateArea(): number {   
        return 0;
        }
    }

    class Circle extends Shape{ 
     radius: number;
        
         constructor(radius: number) {
            super();
            this.radius = radius;
            
         }
         calculateArea(): number {
             return Math.PI * this.radius * this.radius
         }
     }
    

    class Rectangle extends Shape{

        height: number;
        width: number;
        /**
         *
         */
        constructor(height:number, width: number) {
            super();
            this.height =height;
            this.width = width;
            
        }

        calculateArea(): number {
            return this.width * this.height;
        }

     }

     const getShapeArea = (param: Shape) => { 
        console.log(param.calculateArea());        
    
     }
     const shape =  new Shape();
     const circle =  new Circle(10);
     const square =  new Rectangle(23, 45);
     getShapeArea(shape);
     getShapeArea(circle);
     getShapeArea(square);

}