// Asynchronous
// file read -> single tread -> event loop -> thread pool -> task completion

const fs =  require('fs');
console.log("Task 1");
let text ="i am Ibrahim";
const data = fs.readFile('./asynText.txt',{encoding: "utf-8"},(err, data)=>{
    if(err){ 
        console.log("Error reading file:", err);
        return;
    }
    // console.log("File content:", data);
    text = data;
    console.log(text, "/n inside call back");
})
console.log(text);
console.log("Task 3");