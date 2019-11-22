const Subject = require('../../models/subject.model')
const Lecturer = require('../../models/lecturer.model')

const create = async (req) => {
    let { subjectId, name, lecturer, semester } = req.body
    subjectId = parseInt(subjectId)

    let inputData = { subjectId, name, lecturer, semester }
    let data = new Subject(inputData)

    try {
        await data.save()

        return data
    } catch(err){
        throw err
    }
}

const showAll = async () => {
    try {
        let query = await Subject.find({}).populate([{
            path: 'lecturer',
            model: Lecturer
        }]).exec()
        // let data = query.map((v,i) => {
        //     return {
        //         subjectId : v.subjectId,
        //         name : v.name,
        //         lecturer : v.lecturer,
        //         semester : v.semester
        //     }
        // })
        return query
    } catch(err){
        throw err
    }
}

const edit = async (id, updatedData) => {
    let { subjectId, name, lecturer, semester } = updatedData
    let data = { subjectId, name, lecturer, semester }

    try {
        let query = await Subject.findOneAndUpdate({_id:id}, updatedData).exec()
        return query
    } catch(err){
        throw err
    }
}

const del = async (id) => {
    try{
        let query = await Subject.findOneAndDelete({_id:id}).exec()
        return query
    } catch(err){
        throw err
    }
}

module.exports = {
    create,
    showAll,
    edit,
    del
}