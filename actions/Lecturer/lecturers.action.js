const Lecturer = require('../../models/lecturer.model')

const create = async(req) => {
    let { lecturerId, name, email, mobilePhone, subject } = req.body
    lecturerId = parseInt(lecturerId)
    mobilePhone = parseInt(mobilePhone)
    
    let inputData = {
        lecturerId, name, email, mobilePhone, subject
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
        let query = await Lecturer.find({}).exec()
        let data = query.map((v, i) => {
            return {
                lecturerId    : v.lecturerId,
                name          : v.name,
                email         : v.email,
                mobilePhone   : v.mobilePhone,
                subject       : v.subject
            }
        })
        return data

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