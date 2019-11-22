const express = require('express')
const router = express.Router()
const moment = require('moment')
const mongoose = require('mongoose')

router.get('/', (req, res) => {
    db_sattus = mongoose.connection.readyState
    db_status_name = ['connected', 'connecting', 'disconnected', 'disconnecting']

    return res.send({
        app_name: 'Student and Lecturer System Information',
        version: '1.0.0',
        server_time: moment().format(),
        database_status: db_status_name[db_status]

    })
})

module.exports = router