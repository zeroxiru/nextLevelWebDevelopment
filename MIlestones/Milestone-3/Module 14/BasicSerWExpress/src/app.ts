import express, { Application, NextFunction, Request, Response } from "express";
import { todosRouter } from "./app/todos/todos.routes";
import path from "path";
import fs from "fs";
// const filepath = path.join(__dirname, "../db/todo.json")
const app: Application = express();
app.use(express.json());

const userRouter = express.Router();

app.use("/todos", todosRouter);
app.use("/users", userRouter);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    console.log({
        url: req.url,
        method: req.method,
        header: req.header
    });
    next()
},

    async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.send('Welcome to Todos App')
        } catch (error) {
            next(error)
        }
    })


app.get('/error',

    async (req: Request, res: Response, next: NextFunction) => {
        try {
              throw new Error("Intentional error from /error route");
        } catch (error) {
            next(error)
        }
    })

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: "Route not found" })
})

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        console.log("error", error);
        res.status(400).json({ message: "Something went wrong from global error handler", error })
    }
})


export default app;

// app.get('/todos/all-todos', (req: Request, res:Response) => {
//      console.log("From Query:",req.query);
//     console.log("From Params", req.params);
//      const data = fs.readFileSync(filepath, { encoding: "utf-8" })
//         // console.log(data);

//         res.json(data);
// })
// app.get('/todos/:title/:body', (req: Request, res:Response) => {
//      console.log("From Query:",req.query);
//     console.log("From Params", req.params);
//      const data = fs.readFileSync(filepath, { encoding: "utf-8" })
//         // console.log(data);

//         res.json(data);
// })

//[app] --[express.json()] -- [todosRouter] -- [root route "/"]-- [GET "/todos"]

// /express/learning-express?title=prismtttttta&body=Learning 1234

/**
 * server:- server handling like- starting, closing, error handling of server only
 * related to server
 * app:- routing handle, middleware, error related to routing handling
 * App folder:- app business logic handling like create get, single get, update, delete,
 *  // "dev": "nodemon ./dist/server.js",
 */

// todosRouter.post('/create-todo', async (req: Request, res: Response) => {

//     const db = client.db("todosDB")
//     const collection = db.collection("todos")
//     const { title, description, priority, isCompleted } = req.body;

//     if (!title || !description || !priority || !isCompleted) {
//         return res.status(400).json({ message: "Missing Required Fields" })
//     }
//     await collection.insertOne({
//         title,
//         description,
//         priority,
//         isCompleted
//     })
