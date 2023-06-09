const express = require('express')
var cors = require('cors')

const DATA  = require('./data').DATA
const app = express()
const port = 3003

app.use(cors())

app.get('/tabs', (req, res) => {


    let responseData = DATA;
    res.json(responseData);

})

app.listen(port)

module.exports = app
