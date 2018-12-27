const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        method : 'get',
        msg : 'codekul index'
    })
})

router.get('/candidates', (req, res) => {
    res.json({
        method : 'get',
        msg : 'returning all enrolled candidates'
    })
})

router.post('/enroll', (req, res) => {
    res.json({
        method : 'post',
        msg : 'enrolling new candidate'
    })
})

module.exports = router