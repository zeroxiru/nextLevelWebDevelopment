//const { error } = require('console');
const fs = require('fs');

const readStream = fs.createReadStream("./bufferStreamText.txt", {encoding: "utf-8"});
const writeStream = fs.createWriteStream('./asynWrite.txt', {encoding: "utf-8"})

readStream.on('data', (data)=> { 
    console.log(data);

    writeStream.write(data, (err)=>{ 
    if(err){ 
        throw Error("Error", err)
    }
})

} )


readStream.on('error', (err)=>{ 
    throw Error("Error", err);
})

writeStream.on('error',(err)=>{ 
    throw Error("Error", err);
} )

readStream.on('end', () => { 
    console.log("Reading ended");
    writeStream.end();
})

writeStream.on('finish', ()=> { 
    console.log("Written successfully");
})