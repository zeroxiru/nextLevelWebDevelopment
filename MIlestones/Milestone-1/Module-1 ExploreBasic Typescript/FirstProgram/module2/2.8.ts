{ 

    // basic Promise
       
    // simulate for string type data
      const createPromise = ():Promise<string> => { 
        return new Promise<string>  ((resolve, reject) => {
            const data : string = "Something";
            if(data){ 
                resolve(data)
            } else{ 
                reject('Failed to load data')
            }


        } )
    }

     //calling create promise function

     const showData = async () : Promise<string> => { 
        const data : string = await createPromise();
        return data
        //console.log(data);
     }
     showData()
     .then(result => console.log("Show Data:", result));

       // simulate for boolean type data
     const createPromise2 = (): Promise<boolean> => {
        return new Promise<boolean>((resolve, reject) => { 
        const data : boolean = true;
        if(data) { 
            resolve(true)
        } else { 
            reject('Failed to load data')
        }
    })
    }

    const showBooleanData = async (): Promise<boolean> => { 
        const data : boolean = await createPromise2();
         return data;
    }
    showBooleanData()
    .then(result => console.log("Show Boolean Data: ", result));
    

     // simulate for object type data

     type Something = {something: string}
     const createPromise3 = (): Promise<Something> => { 
       return new Promise<Something>((resolve, reject) => { 
        const data : Something = {something: "something"}
        if(data) {
            resolve(data);
        }else { 
            reject("failed to load data")
        }

       });

     };

     const showObjectData = async (): Promise<Something> => { 
       const data : Something = await createPromise3();
       return data;
     }
    
    showObjectData()
    .then(result => console.log("Show Object Data:", result))
    //



}