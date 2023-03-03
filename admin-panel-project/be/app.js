console.log('It is my app.js')
// Import necessary module
const express = require('express')
const cors = require('cors')
const fs = require('fs')


// config of modules
const app = express()
const PORT = 8080


app.use(cors())
app.use(express.json())


app.post('/users', (request, response) => {
    const body = request.body
    const newUser = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phoneNumber: body.phoneNumber,
        age: body.age,
        gender: body.gender,
        password: body.password,
        address: body.address,
        userRole: body.userRole
    }

    console.log(request.body)
    fs.readFile('./data/users.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file does not exist',
                data: []
            })
        }

        const objectData = JSON.parse(readData)
        objectData.push(newUser)
        fs.writeFile('./data/users.json', JSON.stringify(objectData), (writeError) => {
            if (writeError) {
                response.json({
                    status: 'file write error',
                    data: []
                })
            }
            response.json({
                status: 'Success',
                data: objectData
            })
        })
    })
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})