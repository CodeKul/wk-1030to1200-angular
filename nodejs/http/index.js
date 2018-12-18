const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to codekul'))
app.get('/sum/:num1/:num2', (req, res) => {
    let obj = {
        result : parseInt(req.params.num1) + parseInt(req.params.num2),
        paramsObj : req.params
    }    
    res.send(obj)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

