{ 
    // utility types 
    // Pick Type 

    type Person = { 
        name: string;
        age: number;
        email?: string;
        contactNumber: number; 
    }

    type NameAndAge = Pick<Person, 'name'|'age'>
    type ContactInfo = Omit<Person, 'name'|'age'>

    // required
    type PersonRequired = Required<Person>

    // Optional

    type PersonPartial = Partial<Person>

    // ReadOnly
    const person1 : Person= { 
        
    }
    //
    
}