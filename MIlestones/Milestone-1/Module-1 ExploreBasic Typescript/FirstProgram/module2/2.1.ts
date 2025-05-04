{ 

    //  type assertion

    let anything: any;

    anything =  "Next level web development";

    anything = 222;
    // (anything as number)

    const kgtoGm = (value:string | number): string | number | undefined => { 
      
        if(typeof value === 'string'){ 
            const convertedValue = parseFloat(value) * 1000;
            return `The Converted Value is : ${convertedValue}`;
        }

        if(typeof value === 'number') { 
            return value * 1000;
        }
    }

    const result1 = kgtoGm(1000) as number;
    const result2 = kgtoGm("1000") as string;

type CustomError = { 
    message: string
}

    try {
        
    } catch (error) {
        console.log((error as CustomError).message);
    }
  
    //

}