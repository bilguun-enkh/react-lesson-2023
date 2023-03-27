console.log('Day - 85 - spatial mongodb')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config()
const PORT = process.env.PORT
const app = express()
const restaurantApi = require('./routes/restaurants.routes')
const neighborhoodApi = require('./routes/neighborhoods.routes')

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

app.use(express.json())
app.use(cors())

app.use('/restaurant', restaurantApi)
app.use('/neighborhood', neighborhoodApi)

app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error));
    console.log(`Express Application is running on http://localhost:${PORT}`);
});