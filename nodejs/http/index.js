const express = require('express')
// const bodyParser = require(`body-parser`)
const cors = require('cors')
const app = express()

const port = 3000

app.use(express.json())
app.use(cors())
let students = []

app.get('/', (req, res) => res.send('Welcome to codekul'))
app.get('/sum/:num1/:num2', (req, res) => {
    let obj = {
        result : parseInt(req.params.num1) + parseInt(req.params.num2),
        paramsObj : req.params
    }    
    res.send(obj)
})
app.post('/calc', (req, res) => {
    console.log(req.body)
    let nm1 = req.body.num1
    let nm2 = req.body.num2
    let op = req.body.op

    res.json({
        result : eval(`${nm1} ${op} ${nm2}`)
    })
})

app.post(`/student`, (req, res) => {
    console.log()
    students.push(req.body)
    res.json({
        msg : 'Student added successfully',
        students : students
    })
})

app.get(`/students`, (req,res)=>{
    res.json({
        msg : 'Student List',
        students : students
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

