{ 
// mapped types
const arrOfNumber : number[] = [1, 34, 23, 2]
// const arrOfStrings : string[] = ['1', '34', '23','2']

const arrOfStrings: string[] = arrOfNumber.map(number => 
    number.toString());

    console.log(arrOfStrings);


    type areaNumber = {
        height: number;
        width: number;
    }
    
    // type areaString = {
    //     height: string;
    //     width: string;
    // }
  
    type areaString = { 
        [key in keyof areaNumber]: string
    }


//


}