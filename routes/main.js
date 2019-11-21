const index = require('./index')
const students = require('./students.routes')
const lecturers = require('./lecturers.routes')
const subjects = require('./subjects.routes')


const routes = (app) => {
    app.use('/', index)
    app.use('/lecturer', lecturers)
    app.use('/student', students)
    app.use('/subject', subjects)
}

module.exports = routes