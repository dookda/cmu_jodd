const express = require('express')
const app = express()
const port = 3000

const api = require("./api")
app.use(api)

app.use('/', express.static('www'))

// app.get('./', (req, res) => {
//     res.send('Hello World!')
// })


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

