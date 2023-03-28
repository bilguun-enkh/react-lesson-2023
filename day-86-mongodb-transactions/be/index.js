console.log("Day - 86 - MongoDB Transactions")

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require("dotenv").config()
const PORT = process.env.PORT
const app = express()
const transactionApi = require('./routes/transaction-route')
const productApi = require('./routes/product-route')

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING

app.use(express.json())
app.use(cors())

app.use('/transaction', transactionApi)
app.use('/product', productApi)

app.get('/', (request, response) => {
    response.status(200).send('<h1 style="text-align: center">Day 86 MongoDB Transaction</h1>')
})
app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully."))
        .catch((error) => console.error(error));
    console.log(`Express Application is running on http://localhost:${PORT}`);
})