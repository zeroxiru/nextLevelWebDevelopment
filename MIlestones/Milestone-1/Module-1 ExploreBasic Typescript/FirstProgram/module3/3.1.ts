{ 
    //
    class Animal { 
    //   name: string;
    //   species: string;
    //   sound: string;  
    

    constructor( public name: string,public species: string,public sound: string){

        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }

     makesSound() {
        console.log(`The  sound of the ${this.species} is ${this.sound}`);
    }

 
    //
}
const dog = new Animal("Mike", "dog", " Ghew Ghew");
const cat = new Animal("Dike", "cat", " Mhew Mhew");
 dog.makesSound();
 cat.makesSound();

}