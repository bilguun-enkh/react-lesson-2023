const express = require("express")
const Users = require("../models/Users")
const adminRouter = express.Router()
const brcypt = require("bcrypt")

adminRouter.post("/register", async (request, response) => {
    const { email, password } = request.body

    if (email && password) {
        console.log(email, password)
        const oldUser = await Users.findOne({ email })
        if (oldUser !== null) {
            response.status(200).json({
                message: "User already exists."
            })
        } else {

            const hashedPassword = await brcypt.hash(password, 10)
            Users.create({ email: email, password: hashedPassword })
                .then((data) => {
                    response.status(201).json({
                        message: "success",
                        email: data.email
                    })
                    return
                }).catch((error) => {
                    response.status(500).json({
                        success: false,
                        error
                    })
                })

        }
    } else {
        console.log("error: Input field is empty.")
    }
})

adminRouter.post("/login", async (request, response) => {
    response.status(200).json({
        data: []
    })
})

module.exports = adminRouter