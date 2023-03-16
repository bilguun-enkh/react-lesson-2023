const express = require('express')
const User = require('../models/Users')
const Router = express.Router()

Router.get("/users", async (request, response) => {
    const result = await User.find({})
    console.log(result)
    response.json({ data: result })
})

Router.get("/user", async (request, response) => {
    const userId = request.query.id
    console.log(userId)

    const user = await User.findOne({ _id: userId })

    response.json({
        data: []
    })
})

Router.get("/userByEmail", async (request, response) => {
    const userEmail = request.query.email

    const email = await User.find({ email: userEmail }, '_id name email').exec()
    console.log(email)

    response.json({
        data: email
    })
})

Router.post("/user", async (request, response) => {

    const body = request.body
    const newUser = new User(body)
    const result = await newUser.save()

    console.log(result)
    response.json({ data: result, })

})

Router.put("/updateOneUser", async (request, response) => {
    const result = await User.updateOne(
        { _id: "64127874842c6dae0fb70bc3" },
        { $set: { createdOn: Date.now(), name: "Brian", email: "brian@gmail.com" } }
    )
    response.json({ data: result })
})


Router.get("/userGetEmail", async (request, response) => {

    const userEmail = request.query.email

    const foundUser = await User.findByUserEmail(userEmail)

    response.json({
        data: foundUser
    })
})

Router.delete("/user", async (request, response) => {
    const body = request.body
    console.log(body)

    const result = await User.findOneAndDelete({ _id: body.id })
    response.json({ data: result })
})
module.exports = Router 