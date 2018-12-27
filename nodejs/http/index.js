const express = require('express')
const fileUpload = require('express-fileupload')

const cors = require('cors')
const codekul = require('./codekul')
const sample = require('./sample')
const app = express()

const port = 3000

app.use(express.json())
app.use(cors())
app.use(fileUpload())
app.use('/codekul', codekul)
app.use('/sample', sample )

app.route('/book')
    .get(function (req, res) {
        res.json({
            method : 'Get'
        })
    })
    .post(function (req, res) {
        res.json({
            method : 'Post'
        })
    })
    .put(function (req, res) {
        res.json({
            method : 'Put'
        })
    })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

