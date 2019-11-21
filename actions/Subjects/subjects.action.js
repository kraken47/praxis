const Subject = require('../../models/subject.model')

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
        let query = await Subject.find({}).exec()
        let data = query.map((v,i) => {
            return {
                subjectId : v.subjectId,
                name : v.name,
                lecturer : v.lecturer,
                semester : v.semester
            }
        })
    } catch(err){
        throw err
    }
}

module.exports = {
    create,
    showAll
}