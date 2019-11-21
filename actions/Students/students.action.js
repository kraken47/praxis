const Student =  require('../../models/student.model')

const create = async (req) => {
    let { studentId, name, email, mobilePhone, major } = req.body
    studentId = parseInt(studentId)
    mobilePhone = parseInt(mobilePhone)

    let inputData = { studentId, name, email, mobilePhone, major }

    let data = new Student(inputData)

    try {
        await data.save()

        return data
    } catch(err){
        throw err
    }
}

const showAll = async () => {
    try {
        let query = await Student.find({}).exec()
        let data = query.map((v, i) => {
            return {
                studentId : v.studentId,
                name : v.name,
                email : v.email,
                mobilePhone : v.mobilePhone,
                major : v.major
            }
        })
        return data
    } catch(err){
        throw err
    }
}

const details = async (id) => {
    try{
        let query = await Student.findOne({_id:id}).exec()
        return query
    } catch(err){
        throw err
    }
}

const edit = async (id, updatedData) => {
    let { studentId, name, email, mobilePhone, major } = updatedData
    let data = { studentId, name, email, mobilePhone, major }

    try {
        let query = await Student.findOneAndUpdate({_id:id}).exec()
        return query
    } catch(err){
        throw err
    }
}

const del = async (id) => {
    try{
        let query = await Student.findOneAndDelete({_id:id}).exec()
        return query
    } catch(err){
        throw err
    }
}

module.exports = {
    create, 
    showAll,
    details,
    edit,
    del
}