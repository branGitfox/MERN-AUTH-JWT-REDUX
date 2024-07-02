import mongoose from "mongoose";
import bcrypt from 'bcryptjs'


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
}, {TimeStamps:true})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }else{
        const salt = await bcrypt.genSalt(10) 
        this.password =await bcrypt.hash(this.password, salt)
    }
})

userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}



export default mongoose.model('User', userSchema)