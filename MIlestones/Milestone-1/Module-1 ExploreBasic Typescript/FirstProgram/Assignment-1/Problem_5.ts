{ 
//     Description: Write a function that takes a string | number and returns:

// The length if it's a string
// The number multiplied by 2 if it's a number
// Function Signature:

// function processValue(value: string | number): number
function processValue(value: string | number): string | number |undefined{

    if(typeof value === 'string'){ 
        return value.length;
    }
     if(typeof value === 'number'){ 
        return value * 2;
    }
   
    //console.log(object);
}

const result =  processValue("Ibrahim rahamath Ullah");
const result1 =  processValue(20);
console.log(result);
console.log(result1);

}