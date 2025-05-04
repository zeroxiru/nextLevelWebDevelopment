{ 
    // constarints
    
    
const addCourseToStudent = <T extends {id:number; name: string, email: string}>(student : T) => { 
    const course = "Next Level Web Development"

    return { 
        ...student,
        course
    }
 }

 const student1 = addCourseToStudent<{ 
    id: number;
    name: string;
    email: string;
    devType: string;

 }>({id: 12,name:"X", email:'x@gmail.com', devType: 'NlWD'})
 const student2 = addCourseToStudent({id: 21, name:"X", email:'x@gmail.com', hasWatch: "Apple Watch"})
  const student3 = addCourseToStudent({id: 22, name: "Ibrahim",email: "i@gmail.com",emni: 'emni'})

    
    
    
    //

}