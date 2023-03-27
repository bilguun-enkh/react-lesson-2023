const { Router } = require("express")
const { getNeighborhoods } = require("../controllers/neighborhood.controller")
const Neighborhood = require("../models/neighborhoods")

const route = Router()

route.get('/restaurants', getNeighborhoods)

module.exports = route