import mongoose, { mongo } from "mongoose";

const UserSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: {type:String , unique: true} ,
    password: { type: String, required: true }

})

export const UserModel = mongoose.model('User',UserSchema)
