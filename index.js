const express = require('express')
const compression = require('compression')

const app = express()

const largeObject = []

for (i = 0; i <50000; i++ ) {
    largeObject.push(
        {
            name: "Foi",
            description: "super description"
        }
    )
}

app.use(compression({level: 9}))
app.get('/', (req, res) => {
    console.log('lendo')
    res.header('Cache-Control', 'public, max-age=3600')
    res.send(largeObject)
})

app.listen(3000, (err) => {
    console.log('server online')
})