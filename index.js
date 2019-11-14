const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    let str = req.body.str
    function urutkanString(str) {
        let arr = ""
        arr = str.split("")
        let hasil = arr.sort()
        let gabung = hasil.join("")
        return gabung
        }
        
        res.send(urutkanString(str))
        
    })
    

app.listen(5000, () => {
    console.log(`Example app listening on port 5000`)
})