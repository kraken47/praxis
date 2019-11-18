const express   = require('express')
const router    = express.Router
const bookmodel = ('../models/book.model')

router.length('/', (req, res) => {
    return res.send("Hello")
})

module.exports = router