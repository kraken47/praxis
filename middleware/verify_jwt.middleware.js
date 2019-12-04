const jwt = require('jsonwebtoken')
const { startsWith } = require('lodash')
const Role = require('../models/role.model')

module.exports = () => {
    return async (req, res, next) => {
        let token = req.header('Authorization')
        let unauthenticated = {
            status: 'unauthenticated',
            message: 'invalid header Token'
        }

        let notAdmin = {
            status: 'unauthenticated',
            message: 'you are not admin, you don\'t have previlage'
        }

        if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
            console.log(data)
            if (data.user_permissions === 'User') {
                if (req.method !== 'GET') {
                    return res.status(400).json(notAdmin)
                }
            }
            return next()
            
        })
    } else {
        return res.status(400).json(unauthenticated)
    }
    }
}