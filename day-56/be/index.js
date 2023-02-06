console.log('DAY - 56 - REST API')

const express = require('express')
const fs = require('fs')
const cors = require('cors')
const { findSourceMap } = require('module')

const app = express()
const PORT = 8081

app.use(cors())
app.use(express.json())


app.delete('/timers', (request, response) => {
    const body = request.body
    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file reader error',
                data: []
            })
        }

        const readObject = JSON.parse(readData)
        const filteredObjects = readObject.filter(o => o.id !== body.timerId)
        fs.writeFile('./data/data.json', JSON.stringify(filteredObjects), (writeError) => {
            if (writeError) {
                response.json({
                    status: 'write file error',
                    data: []
                })
            }
            response.json({
                status: 'Success',
                data: filteredObjects
            })
        })

    })
})

app.post('/timers', (request, response) => {
    const body = request.body
    console.log(body)

    const newTimer = {
        title: body.title,
        project: body.project,
        id: body.id,
        elapsed: body.elapsed,
        runningSince: body.runningSince,
    }
    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'timer does not exist',
                data: []
            })
        }
        const dataObject = JSON.parse(readData)
        dataObject.push(newTimer)
        fs.writeFile('./data/data.json', JSON.stringify(dataObject), (writeError) => {
            if (writeError) {
                response.json({
                    status: 'Error during writing file',
                    data: []
                })
            }
            response.json({
                status: 'Success',
                data: dataObject,
            })
        })
    })
})
app.put('/timers', (request, response) => {
    const body = request.body

    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file read error',
                data: []
            })
        }
        const savedData = JSON.parse(readData)
        const changedData = savedData.map(d => {
            if (d.id === request.body.id) {
                d.title = request.body.title,
                    d.project = request.body.project
            }
            return d
        })

        fs.writeFile('./data/data.json', JSON.stringify(changedData), (writeError) => {
            if (writeError) {
                response.json({
                    status: 'file write error',
                    data: []
                })
            }
            response.json({
                status: 'Success',
                data: changedData
            })
        })
    })
})

app.get('/', (request, response) => {
    response.send('<h1>hello</h1>')
})

app.get('/timers', (request, response) => {
    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if (readError) {
            response.json({
                status: 'file not found',
                data: []
            })
        }

        const timerData = JSON.parse(readData)

        response.json({
            status: 'Success',
            data: timerData
        })
    })
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})