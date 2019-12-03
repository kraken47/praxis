const jwt = require('jsonwebtoken')
const { startsWith } = require('lodash')
const Role = require('../models/role.model')

module.exports = () => {
    return async (req, res, next) => {
        let token = req.header('Authorization')
        let unauthenticated = {
            status: 'unauthencated',
            message: 'invalid header Token'
        }
        if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
            if (err) return res.status(400).json(unauthenticated)
            return next()
        })
    } else {
        return res.status(400).json(unauthenticated)
    }
    }
}