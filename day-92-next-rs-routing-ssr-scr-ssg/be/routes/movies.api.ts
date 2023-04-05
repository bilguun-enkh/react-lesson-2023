import { Router } from 'express'
import { getMovies } from '../controllers/movies.controller'


const movieRouter = Router()

movieRouter.get('/list', getMovies)

export default movieRouter