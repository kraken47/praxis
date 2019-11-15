const express = require('express')
const app = express()
const array_sort =  require("../lib/array-sort")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

//Array - ascending soring
app.get('/array1', (req, res) => {
    let hero = [" Invoker", " Crystal Maiden", " Earth Shaker", " Templar Assasin", " Rikimaru"]
    let sorting = array_sort.ascending_sort(hero)

    return res.send(`Choose your hero:${sorting}`)
})

//Array - descending soring
app.get('/array2', (req, res) => {
    let hero = [" Invoker", " Crystal Maiden", " Earth Shaker", " Templar Assasin", " Rikimaru"]
    let descen = array_sort.descending_sort(hero)

    return res.send(`Choose your hero:${descen}`)
})

app.listen(5000, () => {
    console.log(`Example app listening on port 5000`)
})