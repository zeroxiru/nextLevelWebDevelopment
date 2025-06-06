{ 
    // 
//     Problem 3:
// Description: Create a generic function that concatenates 
// multiple arrays of the same type using rest parameters.

// Function Signature:
// function concatenateArrays<T>(...arrays: T[][]): T[]
//    //

 const concatenateArrays=<T> (...arrays: T[][]): T[] =>{ 
   const result : T[] = [];
   arrays.map(arr => arr.forEach(item => result.push(item)));
   return result;
  }

const result1 =concatenateArrays(["a", "b"], ["c"], ['e','l']);       // Output: ["a", "b", "c"]
const result2 =concatenateArrays([1, 2], [3, 4], [5]);
console.log(result1);
console.log(result2);

}