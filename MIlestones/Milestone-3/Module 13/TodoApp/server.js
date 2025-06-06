const http = require("http");
const path = require("path");
const fs = require("fs");
const filepath = path.join(__dirname, "./db/todo.json")




const server = http.createServer((req, res) => {

    const url = new URL(req.url, `http://${req.headers.host}`);
    //console.log(url, "url");
    const pathname = url.pathname

    // GET All todos
    if (pathname === '/todos' && req.method === "GET") {
        const data = fs.readFileSync(filepath, { encoding: "utf-8" })
        res.writeHead(200, {
            'content-type': "application/json",

        })

        res.end(data);
    }
    //Post to create a new todo
    else if (pathname === '/todos/create-todo' && req.method === "POST") {
        let data = "";
        req.on("data", (chunk) => {
            data = data + chunk;
        })
        console.log(data);
        req.on('end', () => {
            const { title, body } = JSON.parse(data)
            console.log({ title, body });
            const createdAt = new Date().toLocaleString();
            const allTodos = fs.readFileSync(filepath, { encoding: "utf-8" })
            console.log(allTodos);
            const parsedAllTodos = JSON.parse(allTodos);

            parsedAllTodos.push({ title, body, createdAt })
            fs.writeFileSync(filepath, JSON.stringify(parsedAllTodos, null, 2), { encoding: "utf-8" })
            res.end(JSON.stringify({ title, body, createdAt }, null, 2));
        })

    }
    else if (pathname === ('/todo') && req.method === "GET") {

        const title = url.searchParams.get('title')
        console.log(title);
        const data = fs.readFileSync(filepath, { encoding: "utf-8" })
        const parsedData = JSON.parse(data)
        const todo = parsedData.find((todo) => todo.title === title)

        const stringifiedTodo = JSON.stringify(todo)
        res.writeHead(200, {
            'content-type': "application/json",

        })

        res.end(stringifiedTodo);
        // res.end("Single todo")
    }
    else if (pathname === '/todos/update-todo' && req.method === "PATCH") {
        const title = url.searchParams.get('title')
        let data = "";
        req.on("data", (chunk) => {
            data = data + chunk;
        })

        req.on('end', () => {
            const { body } = JSON.parse(data)

            const allTodos = fs.readFileSync(filepath, { encoding: "utf-8" })
            const parsedAllTodos = JSON.parse(allTodos);

            const todoIndex = parsedAllTodos.findIndex((todo) => todo.title === title)
            parsedAllTodos[todoIndex].body = body;
            fs.writeFileSync(filepath, JSON.stringify(parsedAllTodos, null, 2), { encoding: "utf-8" })
            res.end(JSON.stringify(
                { title, body, createdAt:parsedAllTodos[todoIndex].createdAt }, null, 2));
        })

    }
    else {
        res.end("Error occurred given route is not available");
    }
})
server.listen(5000, "127.0.0.1", () => {
    console.log("Server listening to port 5000");
})

/**
 * /todos - GET - all Todos
 * /todos/create-todo post create Todo
*/