const obj  = { 
    name: "Ibrahim",
    age: 32,
    address: {add:"Dhanmondi Dhaka"}
}

const {name, age , address} = obj;
const { add} = obj.address;
console.log(name, age, add);