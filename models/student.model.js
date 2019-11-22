const mongoose = require('mongoose')
const Schema = mongoose.Schema

let studentSchema = new Schema ({
    studentId   : Number,
    name        : String,
    email       : String,
    mobilePhone : Number,
    major       : String,
    acAdvr      : String
})

let Student = mongoose.model('Student', studentSchema)

module.exports = Student