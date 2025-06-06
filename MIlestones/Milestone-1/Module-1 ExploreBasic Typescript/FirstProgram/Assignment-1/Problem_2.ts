{ 

    // Problem 2:
// Description: Create a function that filters an array of objects by the rating property, 
// returning only items with a rating of 4 or more.

// Function Signature:
// function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]


const filterByRating = (items:{ title: string; rating:number}[]): {title: string; rating: number}[] =>{ 
   
    return items.filter(item => item.rating >= 4)
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  
  const result = filterByRating(books);
  console.log(result);
 } 