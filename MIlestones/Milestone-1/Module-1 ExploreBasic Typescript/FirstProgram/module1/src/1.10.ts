{
    //union Types

    type FrontendDeveloper =  'FakibazDeveloper' | 'JuniorDeveloper';
    type FullStackDeveloper =  'FrontEndDeveloper' | 'ExpertDeveloper';
     
    type Developer = FullStackDeveloper |  FrontendDeveloper;
    const newDeveloper: FrontendDeveloper = 'JuniorDeveloper';

    type User = { 
        name: string,
        email?: string,
        gender: 'Male' | 'Female';
        bloodGroup: 'O+'| 'A+'| 'B+'
    }

    
    const user1: User = { 
        name: 'Ibrahim',
        gender: 'Male',
        bloodGroup: 'O+',
    } 

    // intersections Types

    type UxDeveloper = { 
        skills: string[];
        designation1: "Frontend Developer"

    }

    
    type BackDeveloper = { 
        skills: string[];
        designation2: "Backend Developer"

    }

    type StackDeveloper = UxDeveloper & BackDeveloper;

    const fullStackDeveloper : StackDeveloper = { 
        skills:['HTML', 'CSS', 'EXPRESS'],
        designation1: "Frontend Developer",
        designation2:"Backend Developer"

    }

}