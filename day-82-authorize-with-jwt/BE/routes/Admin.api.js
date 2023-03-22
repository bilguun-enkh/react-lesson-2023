const express = require("express")
const Users = require("../models/Users")
const adminRouter = express.Router()
const brcypt = require("bcrypt")
const jwt = require('jsonwebtoken')

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
                        email: data.email,
                        password: hashedPassword
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
    try {
        const { email, password } = request.body

        if (!email && password) {
            response.status(400).json({
                message: "Please fill in the fields."
            })
        }

        const user = await Users.findOne({ email: email })
        const isMatch = await brcypt.compare(password, user?.password)
        if (user && isMatch) {
            const jwtBody = {
                user_id: user._id,
                email: email
            }
            const token = jwt.sign(jwtBody, "MySuperDuperPrivateKey", { expiresIn: "24h" })
            response.status(200).json({
                success: true,
                status: "Successful",
                data: user,
                token: token
            })
            return
        }
        response.status(400).json({
            success: false,
            status: "Passwords did not match."
        })
    } catch (error) {
        response.status(500).json({
            data: 'ERROR',
            error: error
        })
    }
})

module.exports = adminRouter