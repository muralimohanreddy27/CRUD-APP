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
        length : 17,
        required : true
    },
    image : {
        type : image,
    },
    completed : {
        type : Boolean,
        default : false
    }
})

export const user = mongoose.model('user', userSchema);
