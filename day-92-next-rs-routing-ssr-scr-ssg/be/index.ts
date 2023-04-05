console.log('Day - 92 Next-js-routing-ssr-csr-ssg')

import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import theaterRouter from './routes/theaters.api'
import commentRouter from './routes/comments.api'
import movieRouter from './routes/movies.api'
dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 8080
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/test"
app.use(cors())

let name: string = '<h1 style="text-align: center">Day 92 Next-js-routing-ssr-csr-ssg</h1>'

let phoneNumber: number = 99119911
let isMarried: boolean = false
let sheeps: Array<string> = ["sheep1", "sheep2", "sheep3"]
let sheep: string[] = ["sheep1", "sheep2", "sheep3"]
let sheepObject: { name: string; age: number } = {
    name: "sheep1",
    age: 1
}
sheepObject.name = "sheep2"
sheepObject.age = 2

interface Student {
    name: String,
    age: number,
    isVerified: boolean,
}

app.use(express.json())
app.get('/', (request: Request, response: Response) => {
    response.status(200).send(name)
})



app.use('/theaters', theaterRouter)
app.use('/comments', commentRouter)
app.use('/movies', movieRouter)

app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully."))
        .catch((error) => console.error(error));
    console.log(`Express Application is running on http://localhost:${PORT}`);
})