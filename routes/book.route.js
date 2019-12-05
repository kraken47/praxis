const express = require ('express')
const router = express.Router()
const { CreateBook, AllBook, BookDetails, UpdateBook, DeleteBook } = require('../actions/Book/CRUD.book.action')
const { check, validationResult } = require('express-validator')

router.post('/create',
[
check('tittle')
    .not()
    .isEmpty(),
check('author')
    .not()
    .isEmpty(),
check('price')
    .not()
    .isEmpty(),
],
async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.send({
            code: 400,
            status: 'error',
            message: errors.array()
        })
    } try {
        let data = await new CreateBook(req).exec()
        return res.send({
            code: 201,
            status: 'Success',
            message: 'Yeay! Book info has created successfully 😉',
            data
        })

        } catch(err){
            return res.send({
                code: 400,
                status:'Awww something went wrong 😱',
                message: err.message
            }) 
        }
    })

router.get('/', 
    async (req, res) => {
        try {
            let data = await new AllBook(req).exec()
            return res.send({
                code: 200,
                status: "These are the details of Books data 😉",
                data
            })
        } catch(err){
            return res.send({
                code: 400,
                status:'Awww something went wrong 😱',
                message: err.message
            }) 
        }
    })

router.get('/', 
async (req, res) => {
    try {
        let data = await new BookDetails(req).exec()
        return res.send({
            code: 200,
            status: "Here is the details of book data 😉",
            data
        })
    } catch(err){
        return res.send({
            code: 400,
            status:'Awww something went wrong 😱',
            message: err.message
        }) 
    }
})

router.put('/:id',

async (req, res) => {
    try {
        let {id} = req.params
        let data = await new UpdateBook(id, req).update()

        return res.send({
            code: 200,
            status: "Success",
            message: "Yoo, you have updated book data successfully 😉",
            data
            })
        } catch(err){
            return res.send({
                code: 400,
                status:'Awww something went wrong 😱',
                message: err.message
            }) 
        }
    })

router.delete('/:id', 

async (req, res) => {
    try {
        let {id} = req.params
        let data = await new DeleteBook(id).delete()

        return res.send({
            code: 200,
            status: "Success",
            message: "Here we go, book data has deleted 😉",
            data
            })
        } catch(err){
            return res.send({
                code: 400,
                status:'Awww something went wrong 😱',
                message: err.message
            }) 
        }
    })
    
    router.get

module.exports = router