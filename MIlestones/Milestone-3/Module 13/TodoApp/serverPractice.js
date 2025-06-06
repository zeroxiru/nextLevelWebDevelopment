const  http = require("http");
const { title } = require("process");

const data = [ 
    { title: "Prisma",
      body: "Learning Node",
      createdDate : "5/12/2025 1:20:34"
    },
      { title: "TypeScript",
      body: "Learning Node",
      createdDate : "5/31/2025 4:56: 45"
    }
]
const server =  http.createServer((req, res)=> {
    // console.log(req.url, res.method); 
    // res.end("Wellcome to Todo App Server")

    if(req.url === '/todos' && req.method === "GET")
    {   
        res.writeHead(200,{
            'content-type': "application/json",
            // 'email': "iru@gmail.com"
        })
        // res.setHeader('content-type', "text/plain");
        // res.setHeader('email', "iru1@gmail.com");
        // res.statusCode = 201;
        res.end(JSON.stringify(data));
    }
    else if(req.url === '/todos/create-todo' && req.method === "POST")
    { 
        res.end("A new todo is created");
    }
    else
    { 
    res.end("Error occurred given route is not available");
     }
})
server.listen(5000, "127.0.0.1", ()=>{ 
    console.log("Server listening to port 5000");
})

/**
 * /todos - GET - all Todos
 * /todos/create-todo post create Todo
*/