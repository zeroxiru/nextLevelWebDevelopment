// Task 14: Asynchronous TypeScript and Type Aliases
// Objective: Simulate an asynchronous operation with TypeScript.

// Instructions:

// Write an asynchronous function that:
// Simulates fetching user data (containing name and age).
// Returns the data after a short delay.


// simulate for object type data
{ 
type userInfo = {name: string, age: number}

const postpone = (ms: number):Promise<void> => { 
  return new Promise((resolve)=> setTimeout(resolve,ms))
}

const fetchUserData = async(): Promise<userInfo> => { 
  await postpone(2000);
  const shouldFail = Math.random() < 0.5;
  if(shouldFail){ 
    return Promise.reject("Failed to fetch user data")
  }
  return { 
    name: "Alice",
    age: 39
  };
}


//call the function
const showData = async () => { 
  const data = await fetchUserData();
  console.log(data);
}
showData();

}

// type userInfo = {name: string, age: number }

// const delay = (ms:number ): Promise <void> => { 
//     return new Promise((resolve)=> setTimeout(resolve, ms))
// }
// const fetchData = async ():  Promise<userInfo> => { 

//     await delay(1000);
    
//   return new Promise<Something>((resolve, reject) => { 
//    const data : Something = {name: 'string', age: 'number'}
//    if(data) {
//        resolve(data);
//    }else { 
//        reject("failed to load data")
//    }

//   });

// };

// const showObjectData = async (): Promise<Something> => { 
//   const data : Something = await createPromise3();
//   return data;
// }

// showObjectData()
// .then(result => console.log("Show Object Data:", result))

