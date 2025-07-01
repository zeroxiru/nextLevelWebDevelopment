import express, { Request, Response } from "express"

import { Note } from "../models/notes.model";
export const notesRoutes = express.Router()
// create a single  note data
notesRoutes.post('/create-note', async (req:Request, res: Response) => {
   
   // notesRoutesroach one creating data
//    const myNote = new Note({ 
//     title : "learning Mongoose",
//     tags: { 
//         label: 'database'
//     }
//    })
//  await note.save();

    // notesRoutesroach two creating data by request body like postman
    const body = req.body
    const note = await Note.create(body);

  

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: note
     })
})

// get all notes data
notesRoutes.get('/', async (req:Request, res: Response) => {
   
    const notes = await Note.find()

    res.status(201).json({
        success: true,
        message:`${notes.length} Notes are available currently`,
        note: notes
     })
})
// get single id note data

notesRoutes.get('/:id', async (req:Request, res: Response) => {
   
    const noteId = req.params.id;

    // first notesRoutesroach
    // const note = await Note.findById(noteId) -preferred

    // second notesRoutesroach
    const note = await Note.findOne({_id: noteId})


    res.status(201).json({
        success: true,
        message:` Note are available `,
        note: note
     })
})

//update with patch

notesRoutes.patch('/:id', async (req:Request, res: Response) => {
   
    const noteId = req.params.id;
    const updatedBody = req.body;

    // first notesRoutesroach
    // const note = await Note.findByIdAndUpdate(noteId, updatedBody, {new: true})
    
    // second notesRoutesroach
     const note = await Note.findOneAndUpdate({_id: noteId}, updatedBody, {new: true})
     
    // third notesRoutesroach
    // const note = await Note.updateOne({_id: noteId}, updatedBody, {new: true})


    res.status(201).json({
        success: true,
        message:` Note updated successfully `,
        note: note
     })
})

//Delete with single note

notesRoutes.delete('/:id', async (req:Request, res: Response) => {
   
    const noteId = req.params.id;
    

    // first notesRoutesroach
    const note = await Note.findByIdAndDelete(noteId)
    
    // second notesRoutesroach
     //const note = await Note.findOneAndDelete({_id: noteId}, updatedBody, {new: true})
     
    // third notesRoutesroach
    // const note = await Note.DeleteOne({_id: noteId}, updatedBody, {new: true})


        res.status(201).json({
            success: true,
            message:` Note deleted successfully `,
            note: note
        })
})
