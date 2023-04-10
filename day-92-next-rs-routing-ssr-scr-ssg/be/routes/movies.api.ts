import { Router } from 'express'
import { getDetails, getMovies } from '../controllers/movies.controller'


const movieRouter = Router()

movieRouter.get('/list', getMovies)
movieRouter.get('/byId/:id', getDetails)

export default movieRouter