const express = require("express")
const apiRouter = express.Router()

apiRouter.post("/protected", async (request, response) => {
    response.status(200).json({
        data: []
    })
})

apiRouter.post("/unprotected", async (request, response) => {
    console.log(request.body)
    response.status(200).json({
        data: []
    })
})

module.exports = apiRouter