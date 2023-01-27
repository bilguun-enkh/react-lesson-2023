console.log("Day - 51 : API Express JS")
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { response } = require('express')
const e = require('express')

const app = express()
const PORT = 8080

app.use(cors())
app.use(bodyParser.json())


let data = [
    {
        "id": "recAGJfiU4CeaV0HL",
        "order": 3,
        "title": "Full Stack Web Developer",
        "dates": "December 2015 - Present",
        "duties": [
            "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
            "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
            "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian."
        ],
        "company": "TOMMY"
    },
    {
        "id": "recIL6mJNfWObonls",
        "order": 2,
        "title": "Front-End Engineer",
        "dates": "May 2015 - December 2015",
        "duties": [
            "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
            "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
            "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
            "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1"
        ],
        "company": "BIGDROP"
    },
    {
        "id": "rec61x18GVY99hQq5",
        "order": 1,
        "title": "Engineering Intern",
        "dates": "May 2014 - September 2015",
        "duties": [
            "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
            "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
            "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism."
        ],
        "company": "CUKER"
    }
]

app.get("/", (request, response) => {
    response.send("Here I'm a brutally strong powerful Express Server!")
})

app.get("/data", (request, response) => {
    response.json(data)

})
app.post("/data", (request, response) => {
    const length = data.length
    const requestData = {
        id: length + 1,
        name: request.body.name,
        major: request.body.major,
    }
    data = [...data, requestData]
    response.json(data)
})

app.delete("/data", (request, response) => {
    const newData = data.filter(d => d.id !== request.body.id)
    data = newData
    response.json(data)
})

app.put("/data", (request, response) => {
    console.log(request.body)
    const found = data.filter(d => d.id !== request.body.id)
    const newData = data.map(d => {
        if (d.id === request.body.id) {
            d.name = request.body.name,
                d.major = request.body.major
        }
        return d
    })
    data = newData


    response.json(data)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})