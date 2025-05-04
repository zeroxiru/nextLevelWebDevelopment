{ 
    // spread operator

    const users: string[] = ['shuvro', 'Ibrahim', 'Apple', 'Rahamath']
    const users2: string[] = ['Rumpa', 'Shareen', 'Zohan', 'Mehrish']

    users.push(...users2);


    const mentors1 = { 
        typescript: 'Mezba',
        redux: 'Mir',
        dbms: "Mizan"

    } 
    const mentors2 = { 
        Prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: "Nahid"

    } 

    const totalMentors = { 
        ...mentors1,
        ...mentors2
    }
    // rest operator

    const greetingFriends = (friend1:string, friend2:string, friend3:string )=> { 
        console.log(`Hello ${friend1} ${friend2} ${friend3}`);
    }

    greetingFriends("Abul", "Kabul", "Babul")

    const seeOfFriends =(...friends: string[]) => { 
        //console.log(`Bye Bye ${friends} ${friends}`);
        friends.forEach((friends:string)=> console.log(`Bye Bye ${friends}`))
    }

    seeOfFriends("Shahreen", "Zohan");
   
    // destructuring
const poorUser = { 
    name: "Mr.X",
}

}