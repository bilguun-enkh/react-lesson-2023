import { Router } from 'express'
import { getTheaters, getTheaterById, searchTheatersByZipcode, searchTheatersByStreet, searchTheatersByState } from '../controllers/theater.controller'

const theaterRouter = Router()

theaterRouter.get('/list', getTheaters)

theaterRouter.get('/byId/:id', getTheaterById)

theaterRouter.get('/searchByStreet', searchTheatersByStreet)

theaterRouter.get('/searchByZipcode', searchTheatersByZipcode)

theaterRouter.get('/searchByState', searchTheatersByState)

export default theaterRouter