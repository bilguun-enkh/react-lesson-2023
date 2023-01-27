console.log("Day - 51 : API Express JS")
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { response } = require('express')
const e = require('express')

const app = express()
const PORT = 8080

app.use(cors())
app.use(bodyParser.json())


let data = [
    {
        'id': 1,
        'name': 'Bilguun',
        'major': 'Com-Sci',
        'age': 23
    }
]

app.get("/", (request, response) => {
    response.send("Here I'm a brutally strong powerful Express Server!")
})

app.get("/data", (request, response) => {
    response.json(data)

})
app.post("/data", (request, response) => {
    const length = data.length
    const newData = {
        id: length + 1,
        name: request.body.name,
        major: request.body.major,
    }
    data.push(newData)
    response.json(data)
})

app.delete("/data", (request, response) => {
    const newData = data.filter(d => d.id !== request.body.id)
    data = newData
    response.json(data)
})

app.put("/data", (request, response) => {
    console.log(request.body)
    const updateData = {
        id: request.body.id,
        name: request.body.name,
        major: request.body.major,
    }
    response.json(data)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})