// Task 3: Object Types, Type Alias, & Literal Types
// Objective: Define a structured Person object using Type Aliases.

// Instructions:

// Define a Person type alias with properties for Name, Address, 
// Hair and Eye Color, Income and Expense, Hobbies, Family Members, 
// Job, Skills, Marital Status, and Friends.
type HairColor = 'black'| 'brown'| 'blonde'| 'white';
type EyeColorColor = 'black'| 'brown'| 'hazel'| 'gray';
type MaritalStatus = 'single'| 'married'| 'divorced'| 'widowed';

type Person = { 
    name: string, 
    address: string, 
    hairColor: HairColor,
    eyeColor: EyeColorColor,
    income: number,
    expense: number, 
    hobbies: string[],
    familyMembers: string[],
    job: string,
    skills: string[],
    maritalStatus: MaritalStatus,
    friends: string[]

}

const person : Person = { 
    name: "Ibrahim", 
    address: "Moslim Para Bauphal", 
    hairColor: 'black',
    eyeColor: "brown",
    income: 100,
    expense: 10000, 
    hobbies: ['cricket', 'Football'],
    familyMembers: ['Rezaul(Father)', 'Nasrin(Mother)', 'Shahreen(Wife)'],
    job: 'Software Engineer',
    skills: ['HTML', 'CSS', 'REACTJS', 'NODEJS', 'TypeScript'],
    maritalStatus: 'married',
    friends:['Abir', 'Shakil', 'Nafiz']
}

console.log(person);