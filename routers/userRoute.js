import express from 'express'
import { authUser, getUserProfil, register, updateUserProfil } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'
const routes = express.Router()

routes.post('/register', register)
routes.post('/auth', authUser)
routes.route('/profile').get(protect,getUserProfil).put(protect,updateUserProfil)

export default routes