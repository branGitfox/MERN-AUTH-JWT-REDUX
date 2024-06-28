import express from 'express'
import { authUser, getUserProfil, register, updateUserProfil } from '../controllers/userController.js'

const routes = express.Router()

routes.post('/register', register)
routes.post('/auth', authUser)
routes.route('/profile').get(getUserProfil).put(updateUserProfil)

export default routes