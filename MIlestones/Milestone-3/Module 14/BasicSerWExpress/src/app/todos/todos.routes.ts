import express, { Request, Response } from "express";
import fs from 'fs';
import path from 'path';
import { client } from "../../config/mongodb";
import { ObjectId } from "mongodb";

// const userRouter =  express.Router();
const filepath = path.join(__dirname, "../../../db/todo.json")

export const todosRouter = express.Router()
todosRouter.get("/", async (req: Request, res: Response) => {

    const db = await client.db("todosDB")
    const collection = await db.collection("todos")

    const cursor = collection.find({})
    const todos = await cursor.toArray()
    res.json(todos)
})

todosRouter.post('/create-todo', async (req: Request, res: Response) => {
    const { title, description, priority, isCompleted } = req.body;
    const db = await client.db("todosDB")
    const collection = await db.collection("todos")


    await collection.insertOne({
        title: title,
        description: description,
        priority: priority,
        isCompleted: isCompleted
    })

    const cursor = collection.find({})
    const todos = await cursor.toArray()




    res.json(todos);
})

todosRouter.get("/:id",async  (req: Request, res: Response) => {
    const id = req.params.id;
    const db =  client.db("todosDB")
    const collection =  db.collection("todos")
    const todo = await collection.findOne({_id: new ObjectId(id)})

    res.json(todo);
})

// todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
//     const id = req.params.id;
//     const db =  client .db("todosDB")
//     const collection = db.collection("todos")
//     const updateTodo = 
//     const { title, body } = req.body;
//     console.log(title, body);

//     res.send(" One todo created");
// })

todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const db =  client .db("todosDB")
    const collection = db.collection("todos")
    const deleteTodo  = await collection.deleteOne ({_id : new ObjectId(id)});
    

    res.json( { 
        message: "Deleted Successfully"
    });
})