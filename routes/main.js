const register = require ('./register.route')
const routes = (app) => {
    app.use('/register', register)
}

module.exports = routes