const mongoose = require('mongoose')
const Schema = mongoose.Schema

let subjectSchema = new Schema ({
    subjectId   : Number,
    name        : String,
    lecturer    : String,
    semester    : String
})

let Subject = mongoose.model('Subject', subjectSchema)

module.exports = Subject