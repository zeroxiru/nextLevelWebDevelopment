{ 
    // Generic type

    type GenericArray0 = Array<number>;
    type GenericArray1 = Array<string>;
    type GenericArray2 = Array<boolean>;

    //const rollNumbers : number[] = [3, 5, 6];
    const rollNumbers : Array<number> = [3, 5, 6];

   // const mentors : string[] = ["a", "b", "c", "d"];
    const mentors : Array<string> = ["a", "b", "c", "d"];

    // const boolArray : boolean[] = [true, false, true, ];
    const boolArray : Array<boolean> = [true, false, true, ];

    const add = (x: number, y:number)=> x+y

    add(33,22);

    // generic Array

    type GenericArray<T> = Array<T>

      //const rollNumbers : number[] = [3, 5, 6];
      const rollNumbers1 : GenericArray<number> = [3, 5, 6];

      // const mentors : string[] = ["a", "b", "c", "d"];
       const mentors1 : GenericArray<string> = ["a", "b", "c", "d"];
   
       // const boolArray : boolean[] = [true, false, true, ];
       const boolArray1 : GenericArray<boolean> = [true, false, true, ];

       // generic Object
       const user : GenericArray<{name: string, age: number}>= [ 
        { 
            name : "Mezba",
            age: 100,
        },
        { 
            name: "Jhankar",
            age: 110
        }
       ]


    //  generic tuple
    type GenericTuple<X, Y> = [X, Y]

    const  human: GenericTuple<string, string> = ['Mr.X', 'Mrs.Y']

    const UserWithID : GenericTuple<number, {name:string, email:string}>
    = [1, {name: "Ibrahim", email:"a@gmail.com"}]




    //
}