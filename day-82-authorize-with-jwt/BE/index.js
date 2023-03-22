console.log('Day - 82 - authorize with jwt')

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const adminRouter = require('./routes/Admin.api')
const apiRouter = require('./routes/api')
const PORT = 8080
const app = express()

const MONGO_CONNECTION_STRING = "mongodb+srv://bilguun-enkh:JV341KR5DHasM50q@mernstackpineconedb.mwhgdhi.mongodb.net/test"

app.use(express.json())
app.use(cors())
app.use('/admin', adminRouter)
app.use('/api', apiRouter)


app.listen(PORT, () => {
    mongoose
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error));
    console.log(`Express Application is running on http://localhost:${PORT}`);
});