import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type : String,
        length : 20,
        required : true
    },
    UserName: {
        type : String,
        required : true
        
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    }
})

export const user = mongoose.model('user', userSchema);
