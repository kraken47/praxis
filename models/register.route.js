const express = requrie('express')
const router = express.Router()
const Register = require('../actions/login/register.action')
const {check, validationResult, body} = require('express-validator')

router.post('/', 
[
check('name')
    .not()
    .isEmpty(),
check('email')
    .not()
    .isEmpty(),
check('username')
    .not()
    .isEmpty(),
check('phone')
    .not()
    .isEmpty(),
check('password')
    .not()
    .isEmpty()
    .isLength({ min: 8 }),
check('password_confirmation')
    .not()
    .isEmpty(),
body('password_confirmation').custom((value, {req}) => {
    if(value != req.body.confirmation) {
        throw new Error("Sorry, password confirmation doesn't match :(")
    } else {
        return true
    }
    })
],
async (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.send({
                code: 400,
                status: 'error',
                message: error.array()
            })
        } try {
            let data = await new Register(req).exec()
            return res.send({
                code: 200,
                status: 'Success',
                message: 'Yeay! you are registered successfully :D'
            })

            } catch(err){
                return res.send ({
                    code: 400,
                    status:'Error, there are something wrong!',
                    message: err.message
                })
        }
    }
)

    