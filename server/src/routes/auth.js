import express  from "express";
import { UserModel } from '../models/Users.js'
import jwt from "jsonwebtoken"
import bcrypt, { compare } from 'bcrypt'

const router = express.Router()

router.post( '/register' , async(req,res) => {
    const {username,password,useremail} = req.body
    const user = await UserModel.find({username});
    const email = await UserModel.find({email : useremail})

    if (user.length) {
        return res.json({message:"Username already taken."})
    } 
    if (user.length) {
        return res.json({message:"Email already exists."})
    }
    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = new UserModel({username , password: hashedPassword , useremail})
    await newUser.save()
    res.json({message: "User Registered Succesfully."})

})

router.get( '/register' , (req,res) => {
    res.send("REGISTER")
} )

router.post( '/login' , async( req,res ) => {
    const { username , password } = req.body
    var user = await UserModel.find({username})
    if(!user.length) {
        return res.json( {message : "Username doesn't exist"} )
    }
    user = user[0]

    const isPasswordValid = await bcrypt.compare( password , user.password )

    if (!isPasswordValid) {
        return res.json({message : "Username or password incorrect"})
    }
    const token = jwt.sign( {id:user._id},"secret" )
    res.json( {token,userId: user._id} )
})

export default router