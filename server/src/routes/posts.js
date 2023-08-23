import express  from "express";
import { UserModel } from '../models/Users.js'
// import { register,login } from "../controllers/posts.js";



const router = express.Router()
router.post( '/register' , async(req,res) => {
    const {username,password} = req.body
    console.log(username)
    const user = await UserModel.findOne({username : username})
    // res.json(user)
    res.send(user)
})
router.post( '/login')
router.get('/register' ,(req,res)=>{
    res.send('REGISTER')
})
export default router