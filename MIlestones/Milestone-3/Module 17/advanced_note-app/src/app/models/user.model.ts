import { model, Schema } from "mongoose";
import { IUSer } from "../interfaces/user.interface";

const userSchema = new Schema<IUSer>({ 
   firstName: { 
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 20,
    

   },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: [18, 'Age must be at least 18,got value {VALUE}'],
        max: 60,
    }, 

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
},
{versionKey: false,
 timestamps : true
})

export const User = model("User", userSchema)