const express = require('express')
const app = express()
const condition = require("../lib/condition")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// app.get('/query1', (req, res) => {
//     let name = req.query.name
//     console.log(`tipe data : `, typeof name)
//     let job = req.query.job
//     console.log(`tipe data : `, typeof job)
//     let container = [""]
//     let result = container.push(name)
//     res.send(result )
// })

app.get("/task3", (req, res) => {
    let key1 = req.query.key1
    let key2 = req.query.key2

    let result = condition.inputArray(key1, key2)

    return res.send(result)
})

app.post("/task4", (req, res) => {
    let { name, email } = req.body
    let result = condition.inputObject(name, email)

    return res.send(result)
})

app.listen(5000, () => {
    console.log(`Example app listening on port 5000`)
})