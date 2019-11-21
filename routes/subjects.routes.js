const express = require('express')
const router = express.Router()
const { create, showAll } = require('../actions/Subjects/subjects.action')

router.post('/', async (req, res) => {
    try {
        let data = await create(req)

        return res.status(200).json({
            status : 'Success',
            message : 'Subject data has created successfully!',
            data
        })
    } catch(err){
        return res.status(400).json({
            status : 'Error',
            message : err.message
        })
    }
})

router.get('/', async (req, res) => {
    try {
        let data = await showAll()

        return res.status(200).json({
            status : 'Success',
            message : 'Showed all subject data',
            data
        })
    } catch(err){
        return res.status(400).json({
            status : 'Error',
            message : err.message
        })
    }
})

module.exports = router