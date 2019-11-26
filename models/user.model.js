const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema ({
    name: { type: String, default: null },
    username: { type: String, default: null, unique: true },
    password: { type: String, default: null },
    email: { type: String, default: null, unique: true },
    gender: { type: String, default: null },
    phone: { type: String, default: null },
    created_at: { type: Date, default: Date.now() },
    activated_at: { type: Date, default: null },
    deleted_at: { type: Date, default: null }
})

let User = mongoose.model('User', userSchema)
module.exports = User