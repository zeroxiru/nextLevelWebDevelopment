// console.log(process.argv);
const path =  require('path');
const fs =  require('fs');

const inputArguments = process.argv.slice(2);
const text = inputArguments.join(" ").concat("\n");
const timeStamp = new Date().toISOString();
const message = `${text} ${timeStamp}\n`
console.log(message);
if(!message) { 
    console.log("Please provide a message for log.");
    console.log("Example: node index.js Hello World");
    process.exit(1);
}

const filepath = path.join(__dirname, "log.txt");
fs.appendFile(filepath,message, {encoding: "utf-8"}, ()=>{
  console.log("Your log added Successfuly");
});
console.log(filepath);