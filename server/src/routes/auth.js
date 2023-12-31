import express  from "express";
import { UserModel } from '../models/Users.js'
import jwt from "jsonwebtoken"
import bcrypt, { compare } from 'bcrypt'

const router = express.Router()

router.post( '/register' , async(req,res) => {
    const {username,password,email} = req.body
    const user = await UserModel.findOne({username});
    const mail = await UserModel.findOne({email})

    if (user) {
        console.log("REPEAt")
        return res.json({message:"Username already taken."})
    } 

    if (mail) {
        return res.json({message:"Email already exists."})
    }
    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = new UserModel({username , password: hashedPassword , email})
    await newUser.save()
    res.json({message: "User Registered Succesfully."})

})

router.get( '/register' , (req,res) => {
    res.send("REGISTER")
} )

router.post( '/login' , async( req,res ) => {
    const { email , password } = req.body
    var user = await UserModel.findOne({email})
    if(!user) {
        return res.json( {message : "Email doesn't exist."} )
    }

    const isPasswordValid = await bcrypt.compare( password , user.password )

    if (!isPasswordValid) {
        return res.json({message : "Email or password incorrect."})
    }
    const token = jwt.sign( {id:user._id},"secret" )
    res.json( {token,userId: user._id} )
})

export default router