const express = require('express')
const fileUpload = require('express-fileupload')

const cors = require('cors')
const app = express()

const port = 3000

app.use(express.json())
app.use(cors())
app.use(fileUpload())
let students = []

app.get('/', (req, res) => res.send('Welcome to codekul'))
app.get('/sum/:num1/:num2', (req, res) => {
    let obj = {
        result: parseInt(req.params.num1) + parseInt(req.params.num2),
        paramsObj: req.params
    }
    res.send(obj)
})

app.post('/calc', (req, res) => {
    console.log(req.body)
    let nm1 = req.body.num1
    let nm2 = req.body.num2
    let op = req.body.op

    res.json({
        result: eval(`${nm1} ${op} ${nm2}`)
    })
})

app.post(`/student`, (req, res) => {
    console.log()
    students.push(req.body)
    res.json({
        msg: 'Student added successfully',
        students: students
    })
})

app.get(`/students`, (req, res) => {
    res.json({
        msg: 'Student List',
        students: students
    })
})

app.post('/fileUpload', (req, res) => {
    if (Object.keys(req.files).length == 0) {
        return res.json({
            msg: 'No files were uploaded.',
            status: 400
        });
    }
    let sampleFile = req.files.file0;

    sampleFile.mv(`/home/aniruddha/Desktop/myFiles/${sampleFile.name}`, err => {
        return res.json({
            status: 'fail',
            msg: `Problem in moving file`
        })    
    })

    return res.json({
        status: 'success',
        msg: `File ${sampleFile.name} uploaded successfully`
    })
})

app.get('/myImage/:imgNm', (req, res) => {
    return res.sendFile(`/home/aniruddha/Desktop/myFiles/${req.params.imgNm}`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

