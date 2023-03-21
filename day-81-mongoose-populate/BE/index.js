const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const Todo = require("./models/Todo")

const app = express()
const PORT = 8080

const MONGO_CONNECTION_STRING = "mongodb+srv://bilguun-enkh:JV341KR5DHasM50q@mernstackpineconedb.mwhgdhi.mongodb.net/test"

app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    response.status(200).send("<h1>Day - 81 - Insert/Update/Delete Many</h1>")
})
app.post('/create', async (request, response) => {

    const body = request.body
    const result = await Todo.insertMany(body)

    response.status(200).json({
        data: result
    })
})
app.put('/update', async (request, response) => {
    const body = request.body
    console.log(body[0].checked)
    const result = await Todo.updateMany({ name: body[1].name }, { $set: { checked: body[0].checked } })
    response.status(200).json({
        data: result
    })
})
app.get("/list", async (request, response) => {
    const result = await Todo.find({})

    response.status(200).json({
        data: result
    })
})
app.delete("/delete", async (request, response) => {
    const body = request.body

    const result = await Todo.deleteMany(body)

    response.status(200).json({
        data: result
    })
})
app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error))
    console.log(`Applcation is running on http://localhost:${PORT}`)
})