const express = require('express')
const router = express.Router()
const CreateRole = require('../actions/Roles/create.role.action')
const DeleteRole = require('../actions/Roles/delete.role.action')
const RoleList = require ('../actions/Roles/listing.role.action')
const UpdateRole = require('../actions/Roles/update.role.action')

router.post('/create', 

async (req, res) => {
    try {
    let data = await new CreateRole(req).exec()

    return res.send({
        code: 200,
        status: 'Success',
        message: 'Role created successfully',
        data
        })
    } catch(err) {
        return res.send({
            code: 400,
            status: 'error',
            message: err.message
        })
    }
})

router.get('/', 

async (req, res) => {
    try {
        let data = await new RoleList(req).exec()
        return res.send({
        code: 200,
        status: 'Success',
        message: 'Role created successfully',
        data
        })
    } catch(err) {
        return res.send({
            code: 400,
            status: 'error',
            message: err.message
        })
    }
})

router.put('/:id',

async (req, res) => {
    try {
        let {id} = req.params
        let data = await new UpdateRole(id, req).update()

        return res.send({
            code: 200,
            status: 'Success',
            message: 'Role created successfully',
            data
            })
        } catch(err) {
            return res.send({
                code: 400,
                status: 'error',
                message: err.message
            })
        }
    })

router.delete('/:id', 

async (req, res) => {
    try {
        let {id} = req.params
        let data = await new DeleteRole(id).delete()

        return res.send({
            code: 200,
            status: 'Success',
            message: 'Role created successfully',
            data
            })
        } catch(err) {
            return res.send({
                code: 400,
                status: 'error',
                message: err.message
            })
        }
    })
    
module.exports = router