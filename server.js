import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import routes from './routers/userRoute.js'
import cookieParser from 'cookie-parser'

dotenv.config()
const app = express()
app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cookieParser())

 const PORT = process.env.PORT || 5000
 const URL = process.env.MONGO_URI

 mongoose.connect(URL).then(() => {
      console.log('connected')
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
 }).catch(err => console.log(err.message))

 app.use('/api', routes)
  


