const register = require ('./register.route')
const activation = require ('./activation.route')
const user = require('./user.route')
const role = require('./role.route')
const login = require ('./login.route')
const reset = require ('./reset.route')
const verifyJWT = require ('../middleware/verify_jwt.middleware')

const routes = (app) => {
    app.use('/register', register)
    app.use('/activation', activation)
    app.use('/user', verifyJWT(), user)
    app.use('/role', verifyJWT(), role)
    app.use('/login', login)
    app.use('/reset', reset)
    }

module.exports = routes