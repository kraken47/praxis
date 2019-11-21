const mongoose = require('mongoose')
require('dotenv').config()
const host = process.env.host

mongoose.connect(host, {
    'userNewUrlParser': true
})

mongoose.set('useCreateIndex', true)