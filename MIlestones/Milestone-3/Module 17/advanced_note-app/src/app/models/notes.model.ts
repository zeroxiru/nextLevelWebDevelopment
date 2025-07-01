import { model, Schema } from "mongoose";

const noteSchema = new Schema({ 
    title: {type: String, required: true, trim: true, unique: true},
    content: {type: String, default: ""},
    category: {
        type: String,
        enum: ["personal", "work", "study",'programming', 'backend','database'], 
        default: "personal"
    },
    pinned: { 
        type: Boolean,
        default: false
    },
    publishedDate: {type: Date, default: Date.now()},
    tags: { 
        label: {type: String, require: true},
        color: {type: String, default: 'gray'}
    }
    
},
{versionKey: false,
 timestamps : true
}
)
export const Note =  model("Note", noteSchema)