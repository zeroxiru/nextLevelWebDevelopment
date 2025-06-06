// synchronous
// 1. file read / I/O  intensive task -> single thread -> not go to thread pool

const fs =  require("fs");
console.log("Task 1");
const text = "I love programming. If you're interested, I can show you the asynchronous version and compare how its output order differs due to non-blocking behavior. Let me know if you'd like to explore that version.";
console.log("Please wait... Writing to disk");
fs.writeFileSync("./hello.txt", text)

console.log("Task 3");
const data = fs.readFileSync("./hello.txt", {encoding: "utf-8"})




console.log(data);
console.log("Task 4");

// Asynchronous
// file read -> single tread -> event loop -> thread pool -> task completion
