const express = require('express')
const router = express.Router()
const { create, edit, showAll, del } = require('../actions/Subjects/subjects.action')

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
            message : err.message,
        })
    }
})

router.put('/:id', async (req, res) => {
    let { id } = req.params
    let updatedData = {
        subjectId : req.body.subjectId,
        name : req.body.name,
        lecturer : req.body.lecturer,
        semester : req.body.semester
    }

    try {
        let data = await edit(id, updatedData)

        return res.status(200).json({
            status : 'Success',
            message : 'Subject data has updated successfully!',
            data
        })
    } catch(err){
        return res.status(400).json({
            status : 'Error',
            message : err.message
        })
    }
})

router.delete('/:id', async (req, res) => {
    let { id } = req.params

    try {
        let data = await del(id)

        return res.status(200).json({
            status : 'Success',
            message: 'Subject data has deleted successfully!'
        })
    } catch(err){
        return res.status(400).json({
            status : 'Error',
            message : err.message
        })
    }
})

module.exports = router