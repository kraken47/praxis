const mongoose = require('mongoose')
const Schema = mongoose.Schema

let lecturerSchema = new Schema ({
    lecturerId    : Number,
    name          : String,
    email         : String,
    mobilePhone   : Number,
    subject       : String
})

let Lecturer = mongoose.model('Lecturer', lecturerSchema)

module.exports = Lecturer