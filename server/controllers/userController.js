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
        res.status(200).json({})
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

export const getUserProfil = (req, res) => {
    try{
        // console.log(req.user._id)
        res.status(200).json(req.user)
    }catch(err){
        res.status(404).json({message:'no user data'})
    }
}

export const updateUserProfil = async (req, res) => {
    try{
        const user = await User.findById(req.user._id)
        if(user){
            user.name = req.body.name
            user.email = req.body.email

            if(req.body.password){
                user.password = req.body.password
            }

            const updatedUser = await user.save()
            
                    res.status(200).json({
                        _id:updatedUser._id,
                        name:updatedUser.name,
                        email:updatedUser.email
                    })
            
        }
       
    }catch(err){
        res.status(200).json({message:'cannot update user '})

    }
}