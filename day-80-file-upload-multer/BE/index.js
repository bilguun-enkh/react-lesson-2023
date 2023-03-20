const express = require('express')
const cors = require('cors')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const app = express()
const PORT = 8080
const upload = multer({ storage: storage })

app.use(express.json())
app.use(cors())
app.use("/uploads", express.static("uploads"))

app.get('/', (request, response) => {
    response.status(200).send("<h1>Day - 80 - File Upload Multer")
})

app.post("/fileUpload", upload.single('image'), (request, response, next) => {
    console.log(request.file)
    response.json({
        data: []
    })
})

app.listen(PORT, () => {
    console.log(`Applcation is running on http://localhost:${PORT}`)
})