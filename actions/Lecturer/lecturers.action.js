const Lecturer = require('../../models/lecturer.model')
const Subject = require('../../models/subject.model')
const Student =  require('../../models/student.model')

const create = async(req) => {
    let { lecturerId, name, email, mobilePhone, subject, advdStudent } = req.body
    lecturerId = parseInt(lecturerId)
    mobilePhone = parseInt(mobilePhone)
    
    let inputData = {
        lecturerId, name, email, mobilePhone, subject, advdStudent
    }

    let data = new Lecturer(inputData)

    try {
        await data.save()

        return data
    } catch(err){
        throw err
    }
}

const showAll = async() => {
    try {
        let query = await Lecturer.find({}).populate([
            {
                path: 'subject',
                model: Subject
            },
            {
                path: 'advdStudent',
                model: Student
            }
        ]).exec()
        
        return query

    } catch(err){
        throw err
    }
    
}

const details = async (id) => {
    try{
        let query = await Lecturer.findOne({ _id:id }).exec()
        
        return query
    } catch(err){
        throw err
    }
}

const edit = async (id, updatedData) => {
    let { lecturerId, name, email, mobilePhone, subject } = updatedData
    let data = { lecturerId, name, email, mobilePhone, subject }
    try {
        let query = await Lecturer.findOneAndUpdate({_id:id}, updatedData).exec()
        return query
    } catch(err){
        throw err
    }
}

const del = async (id) => {
    try {
        let query = await Lecturer.findOneAndDelete({_id:id}).exec()
        return query

    } catch(err) {
        throw err
    }
}

module.exports = {
    create,
    details,
    showAll,
    edit,
    del
}