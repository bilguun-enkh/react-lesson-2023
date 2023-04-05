import { Router } from 'express'
import { getComments } from '../controllers/comments.controller'


const commentRouter = Router()

commentRouter.get('/list', getComments)

export default commentRouter