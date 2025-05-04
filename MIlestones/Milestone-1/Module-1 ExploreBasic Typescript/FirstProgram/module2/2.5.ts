{ 

// functions with geneircs

const createArray =  (param: string): string[]=> { 
    return [param]
}

const createArraywithGeneric = <T> (param: T): T[]=> { 
    return [param]
}


const result1 =  createArray('Bangladesh')
const resGeneric = createArraywithGeneric<boolean>(true);
const resGenericString = createArraywithGeneric<string>("Bangladesh");
const resGenericNumber = createArraywithGeneric<number>(12311);
type User= {id:number, name:string}
const resGenericObj = createArraywithGeneric<User>({id: 121, name: "Ibrahim"});


// tuple


const createArrayWithTuple = <T, Q> (param1: T, param2: Q ): [T, Q]=> { 
    return [param1, param2]
}


const result10 =  createArrayWithTuple<string, number>('Bangladesh', 121)
const result11 = createArrayWithTuple<string, {namae: string}>("Bangladesh", {name: "Asia"});


const addCourseToStudent = <T>(student : T) => { 
    const course = "Next Level Web Development"

    return { 
        ...student,
        course
    }
 }

 const student1 = addCourseToStudent({name:"X", email:'x@gmail.com', devType: 'NlWD'})
 const student2 = addCourseToStudent({name:"X", email:'x@gmail.com', hasWatch: "Apple Watch"})


}