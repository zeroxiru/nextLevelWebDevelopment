// Description: Create an async function that:

// Returns the square of a number after 1 second
// Rejects if the number is negative
// Function Signature:

{ 
    const delay = (ms: number):Promise<void> => { 
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    
    
    const squareAsync = async (n: number): Promise<number> => { 
        await delay(2000);
        if(n >= 0){ 
            return  n * n;
        }
        else {
            throw new Error("Negative numbers are not allowed");
          }
    
    }
    squareAsync(10)
    .then(result => console.log(result))
    .catch(error => console.log(error))

    // squareAsync(-10)
    // .then(result => console.log(result))
    // .catch(error => console.log(error))
}