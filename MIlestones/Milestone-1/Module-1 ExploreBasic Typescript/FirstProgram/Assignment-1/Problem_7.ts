{
// Problem 7:
// Description:

// Define an enum Day for the days of the week.
// Create a function that returns "Weekday" or "Weekend" based on the input day.
// Enum & Function Signature:

enum Day {
    Monday = "Weekday",
    Tuesday = "Weekday" ,
    Wednesday = "Weekday",
    Thursday = "Weekday",
    Friday = "Weekday",
    Saturday = "Weekend",
    Sunday = "Weekend"
  }
  
  const getDayType = (day: Day): string => { 
    return day;

  }

 console.log( getDayType(Day.Friday));;
 console.log( getDayType(Day.Saturday));;

 }