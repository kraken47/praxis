const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

let studentSchema  = new Schema ({
    studentId   : Number,
    firstName   : String,
    lastName    : String,
    faculty     : String,
    mayor       : String,
    mobilePhone : Number,
    address     : String
})

let Student = mongoose.model("Student", studentSchema)

module.exports = Student