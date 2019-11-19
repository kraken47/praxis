const express   = require('express')
const app       = express()
require('./servers/db')

const index_routes = require('./routes/index')
const declare_student = require('./routes/student.routes')

app.use(express.urlencoded({ extended : true }))

app.use('/index', index_routes)
app.use('/student', declare_student)

app.listen(3000, () => {
    console.log('Example port to 3000')
})