// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

// Instructions:

// Define interfaces Book and Magazine.
// Create:
// A type that is a union of Book and Magazine.
// A type that is an intersection of Book and Magazine.

interface Book  {
title: string;
author: string;
pages: number;

}
const myBook: Book={
 title: "TypeScript Handbook",
  author: "Anders Hejlsberg",
  pages: 250 
}
interface Magazine { 
title: string;
author: string;
issueNumber: number;
publishedMonth: string;
}

const myMagazine: Magazine = {
    title: "Tech Monthly",
    author: "Mr X",
    issueNumber: 42,
    publishedMonth: "April"
  };
  

type ReadingItem =  Book | Magazine;

const printTitle = (material: ReadingItem): void => { 
    console.log(material.title);
}

printTitle(myBook);
printTitle(myMagazine)