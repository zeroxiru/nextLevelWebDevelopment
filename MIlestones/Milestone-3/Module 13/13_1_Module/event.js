const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter{}

const schoolBell = new SchoolBell();

schoolBell.on('ring', ()=>{ 
    console.log("Yahoo class is finished.");
}) 
schoolBell.on('ring', ()=>{ 
    console.log("One more class to go home");
}) 

schoolBell.on('broken', ()=>{ 
    console.log("Ohoo No when the class will be finished");
})


schoolBell.emit('ring');
schoolBell.emit('broken');


