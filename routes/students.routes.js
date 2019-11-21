const express = require('express')
const router = express.Router()
const { create, showAll, details, edit, del } = require('../actions/Students/students.action')

router.post('/', async (req, res) => {
    try {
        let data = await create(req)

        return res.status(200).json({
            status: 'Success',
            message: 'Student data has created successfully!',
            data
        })
    } catch(err){
        return res.status(400).json({
            status : 'Error',
            message: err.message
        })
    }
})

router.get('/', async (req, res) => {
    try{
        let data = await showAll()

        return res.send({
            status : "Success",
            message: 'Showed all student data',
            data
        })
    } catch(err){
        return res.status(400).json({
            status: 'Error',
            message: err.message
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        let { id } = req.params
        let data = await details(id)
        
        return res.status(200).json({
            status : 'Success',
            message: "Here's the details of the lecturer!",
            data
        })
    } catch(err){
        return res.status(400).json({
            status : 'Error',
            message : err.message
        })
    }
})

router.put('/:id', async (req, res) => {
    let { id } = req.params
    let updatedData = {
        studentId : req.body.studentId,
        name : req.body.name,
        email : req.body.email,
        mobilePhone : req.body.mobilePhone,
        major : req.body.major
    }

    try {
        let data = await edit(id, updatedData)

        return res.status(200).json({
            status : 'Success',
            message : 'Student data has updated successfully!',
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
            message: 'Studed data has deleted successfully!'
        })
    } catch(err){
        return res.status(400).json({
            status : 'Error',
            message : err.message
        })
    }
})

module.exports = router