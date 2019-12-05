const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

let bookSchema  = new Schema ({
    bookId      : {type: Number, default: null },
    title       : {type: String, required: true, unique: true, default: null },
    author      : {type: String, required: true, default: null},
    year        : {type: String, default: null},
    publisher   : {type: String, default: null},
    price       : {type: Number, required: true, default: null },
    stock       : {type: Number, default: 0 },
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, defualt: Date.now()},
    deleted_at: {type: Date, default: null}
})

let Book = mongoose.model("Book", bookSchema)

module.exports = Book