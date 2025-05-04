{

     // Learning Functions

 // Normal Functions

 //Arrow Functions

 function add (number1: number, number2:number): number{
    return number1 + number2;
 }
add(5, 59);

const arrowAdd = (num1:number, num2:number): number => num1 + num2;

const arrowAdd2 =(num1:number, num2:number):number => num1 + num2;


// object --> function --> method

const poorUser = { 
    name: "Mezba",
    balance: 0,
    addBalance(amount: number):string { 
        return `My new balance is: ${this.balance + amount} `
    }
}
//object  ---> function --> method

const richUser = { 
    name: "Ibrahim",
    balance : 5000,
    minusBalance(amount: number): string { 
        return `My current Balance is: ${this.balance - amount}`
    }
}
const arr: number[] = [1, 3, 9, 10]
const newArray =  arr.map((elem :number): number=> elem * elem)
}