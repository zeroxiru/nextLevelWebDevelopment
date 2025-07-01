import app from "./app";
import { MongoClient, ServerApiVersion } from 'mongodb';
import { client } from "./config/mongodb";

let server;
const port = 5000




const bootstrap = async () => {
  await client.connect();
  console.log("Connected to MongoDB");
  const db = client.db("todosDB")
  server = app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
  })
}

bootstrap() 