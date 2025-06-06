// Description: Create a function that takes a string and an optional boolean.

// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.

const formatString =(input: string, toUpper: boolean =true): string => { 


return toUpper ? input.toUpperCase() : input.toLowerCase();
}

const result = formatString("Hello"); 
console.log(result);  
formatString("Hello", true);
const result1 = formatString("Hello", true); 
console.log(result1);
const result3 = formatString("Hello", false);
console.log(result3);


