const express   = require('express')
const router    = express.Router()
const studentModel = require('../models/student.model')

router.post('/create', async (req, res) => {
    let { studentId, firstName, lastName, faculty, mayor, mobilePhone, address } = req.body
    let inputData = {
        studentId, firstName, lastName, faculty, mayor, mobilePhone, address
    }

    let data = new studentModel(inputData)
    data.save()

    return res.send({
        status: "Success",
        message: "You have created student data",
        data 
        })
})

router.get('/getAll', async(req,res) => {
    let result = await studentModel.find({}).exec()

    res.send({
        status: 'Success',
        message: 'These are all student data',
        result
    })
})

router.get('/:id', async(req,res) => {
    let { id } = req.params
    let data = await studentModel.findOne({ _id:id}).exec()

    return res.send({
        status: 'Success',
        message: "Here is your request",
        data
        })
})

router.put('/:id', async (req, res) => {
    let { id } = req.params
    let {
        studentId, firstName, lastName, faculty, mayor, mobilePhone, address
    } = req.body

    let updateData = {
        studentId, firstName, lastName, faculty, mayor, mobilePhone, address
    }

    try{
        let data = await studentModel.findByIdAndUpdate(id, updateData)

        return res.status(200).json({
            status: 'Success',
            message: 'Student info has updated',
            data
        })
    } catch(err){
        return res.status(400).json({
            status: 'Error',
            message: err.message
        })
    }
})

router.delete('/:id', async (req, res) => {
    let { id } = req.params
    let query = await studentModel.findByIdAndDelete({_id:id}).exec()

    return res.status(200).json({
        status: 'Success',
        message: 'Student info has deleted',
        query
    })

})

module.exports = router