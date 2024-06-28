import User from "../models/userModels.js"
import generateToken from "../utils/generateToken.js"
export const register = async (req, res) => {
    try{
        const {name, email, password} = req.body
        const userExist =await  User.findOne({email})
        if(userExist){
            return res.status(404).json({message:"user already exist"})
        }

        const user = await User.create({
            name, 
            email, 
            password
        })
            // generateToken(res, user._id)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export const authUser = async (req, res) => {
    try{
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(user && await user.matchPassword(password)){
            generateToken(res, user._id)
            res.status(200).json({message:"user logged"})
        }else{
            res.status(200).json({message:"Invalid email or password"})

        }
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
export const logOut = async (req, res) => {
    res.status(200).json({message:"logOut user"})
}

export const getUserProfil = async (req, res) => {
    res.status(200).json({message:" user profil"})
}

export const updateUserProfil = async (req, res) => {
    res.status(200).json({message:"update user"})
}