{ 
    //
    // instance of guard

    class Animal { 
        name:string;
        species: string;

        /**
         *
         */
        constructor(name: string, species: string) {

            this.name = name;
            this.species = species;    
        }

        makeSound() {
            console.log(`${this.name} makes a generic animal sound. }`);
        }
    }

    class Dog extends Animal{ 
 constructor( name: string, species: string) {
    super(name, species);
 }

 makeBark() { 
    console.log(`${this.name} is barking`);
}



    }

    class Cat extends Animal{ 

constructor(name: string, species: string) {
    super(name, species);
    
}

makeMew(){ 
    console.log(`${this.name} is Meowing`);
}
        
    }

    const isDog = (animal: Animal): animal is Dog =>{ 
        return animal instanceof Dog;
    }

    
    const isCat = (animal: Animal): animal is Cat =>{ 
        return animal instanceof Cat;
    }

    const getAnimalByFuncCall =( animal: Animal) => { 
        if (isDog(animal)) { 
            animal.makeBark();
        }
        else if( isCat(animal)) { 
            animal.makeMew()
        }
        else { 
            animal.makeSound();
        }
    } 

   const getAnimal = (animal: Animal) => { 
    if(animal instanceof Dog) { 
        animal.makeBark();
    }
    else if (animal instanceof Cat) {
    animal.makeMew()
    }
    else { 
        animal.makeSound();
    }
   }
    const dog = new Dog ("Mike", "Dog")
    const cat = new Dog ("Pike", "Cat")
    getAnimal(cat)
    getAnimalByFuncCall(dog)
   // getAnimalByFuncCall()
    //
}