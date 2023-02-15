console.log("Day - 62 - User Login CRUD")

const express = require('express')
const cors = require('cors')
const fs = require('fs')
const { response } = require('express')
const becrpyt = require('bcrypt')

const app = express()
const PORT = 8080
const SALT_ROUNDS = 10

app.use(cors())
app.use(express.json())

// !! API user Register

app.post('/register', (request, response) => {
    const body = request.body
    console.log(body)

    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'data does not exist',
                data: []
            })
        }

        const dataObject = JSON.parse(readData)

        fs.readFile('./data/userrole.json', 'utf-8', (readError, readData) => {
            if (readError) {
                response.json({
                    status: 'file read error',
                    data: []
                })
            }
            const roleData = JSON.parse(readData)
            const roleName = roleData.filter(role => role.id === body.role)[0]

            const userPassowrd = body.password

            becrpyt.genSalt(SALT_ROUNDS, (err, salt) => {
                if (err) {
                    response.json({
                        status: 'generation salt error',
                        data: []
                    })
                }
                becrpyt.hash(userPassowrd, salt, (hashError, hashData) => {
                    if (hashError) {
                        response.json({
                            status: 'hashing error',
                            data: []
                        })
                    }

                    console.log('Hashed Data: ', hashData)
                    const newUser = {
                        firstname: body.firstname,
                        lastname: body.lastname,
                        email: body.email,
                        password: hashData,
                        address: body.address,
                        role: roleName,
                    }
                    dataObject.push(newUser)

                    fs.writeFile('./data/data.json', JSON.stringify(dataObject), (writeError) => {
                        if (writeError) {
                            response.json({
                                status: 'Error during writing file',
                                data: []
                            })
                        }
                        response.json({
                            status: 'Success',
                            data: dataObject
                        })
                    })
                })
            })
        })
    })
})

app.post('/login', (request, response) => {
    const body = request.body
    console.log(body)

    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'File not found',
                data: []
            })
        }


        const usersArrayObject = JSON.parse(readData)
        const foundUser = usersArrayObject.filter(user => body.email === user.email)
        if (foundUser.length === 0) {
            response.json({
                status: 'User not found',
                data: []
            })
        } else {
            const foundUserObj = foundUser[0]
            console.log("Found user", foundUserObj)

            const plainPassword = body.password
            const savedPassword = foundUserObj.password

            becrpyt.compare(plainPassword, savedPassword, (compareError, compareResult) => {
                if (compareError) {
                    response.json({
                        status: "Username or password does not match.",
                        data: []
                    })
                }
                if (compareResult) {
                    console.log('It matches')
                    response.json({
                        status: 'Success',
                        data: {
                            email: foundUserObj.email,
                            firstname: foundUserObj.firstname,
                            lastname: foundUserObj.lastname,
                        }
                    })
                } else {
                    console.log('Invalid password')
                    response.json({
                        status: 'Username or Password is wrong!',
                        data: []
                    })
                }
            })
        }
    })
})

app.get('/users', (request, response) => {
    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file read error',
                data: []
            })
        }
        response.json({
            status: 'Success',
            data: JSON.parse(readData)
        })
    })
})

app.get('/users/roles', (request, response) => {

    fs.readFile('./data/userrole.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file does not exist'
            })
        }
        response.json({
            status: 'Success',
            data: JSON.parse(readData)
        })
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})