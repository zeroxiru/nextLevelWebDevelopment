{ 

    //  generic type

    interface Developer<T, X = null> { 
        name: string;
        computer: { 
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X;
    }
    //

    type EmilabWatch = { 
        brand:string, 
        model:string,
        display: string,
    }
     
    const poorDeveloper: Developer<EmilabWatch > = { 
        name : "Ibrahim",
        computer: { 
            brand:"asus",
            model: "asdefs",
            releaseYear: 2323
        }, 
        smartWatch:{
            brand:"emiler",
            model: "fDEd",
            display: 'oled'
            },
    }

    interface RichDeveloper { 
        brand:string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }
    interface YamahaBike { 
        model: string;
        engineCapacity: string;
    }

    const richDeveloper: Developer<RichDeveloper, YamahaBike> = { 
        name : "Rich Developer",
        computer: { 
            brand:"HP",
            model: "aZZsddefs",
            releaseYear: 2023
        }, 
        smartWatch:{
            brand:"emiler",
            model: "Apple Watch",
            heartTrack: true,
            sleepTrack: true
            },
        bike: { 
            model:"Yamaha",
            engineCapacity: '230cc',
        }
    }
}