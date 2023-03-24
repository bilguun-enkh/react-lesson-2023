console.log('Day - 82 - authorize with jwt')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config()
const adminRouter = require('./routes/Admin.api')
const apiRouter = require('./routes/api')
const PORT = process.env.PORT
const app = express()

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

app.use(express.json())
app.use(cors())
app.use('/admin', adminRouter)
app.use('/api', apiRouter)


app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error));
    console.log(`Express Application is running on http://localhost:${PORT}`);
});