import express  from "express";
import { UserModel } from '../models/Users.js'

const router = express.Router()
router.post( '/register' , async(req,res) => {
    const {username,password} = req.body
    try {
        const users = await UserModel.find({username});
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }

})

export default router