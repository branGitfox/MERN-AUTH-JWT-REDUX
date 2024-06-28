import jwt from 'jsonwebtoken'
import User from '../models/userModels.js';
const protect = async (req, res, next) => {
    let token;
    token = req.cookies.jwt
    try{
         if(token){
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select('-password')
            // next(req.user)
            next()

        }else{
            res.status(404).json({message:'token invalid'})
        }

    }catch(err){
        res.status(500).json({message:'Server error'})
    }
   

}

export {protect}