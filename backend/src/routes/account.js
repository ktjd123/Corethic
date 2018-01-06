import express from 'express'
import Account from '../models/Account'
import Joi from 'joi'

const router = express.Router()

router.post('/login', (req, res) => {
    const { id, pw } = req.body
    const schema = Joi.object().keys({
        id: Joi.string().min(3).max(10).required(),
        pw: Joi.string().min(6).max(20).required()
    })
    const result = Joi.validate({ id: id, pw: pw }, schema)
    if (result.error) {
        return res.status(400).json({
            code: 0
        })
    }
    Account.findOne({ "id": id }).exec().then(user => {
        if (!user) {
            return res.status(404).json({
                code: 1
            })
        }
        if (!user.compareHash(pw)) {
            return res.status(403).json({
                code: 2
            })
        }
        req.session.loginInfo = {
            _id: user._id,
            id: user.id,
            name: user.name
        }
        return res.json({
            success: true
        })
    }).catch(err => {
        throw err
    })
})

router.post('/register', (req, res) => {
    const {id, pw, email, name } = req.body
    const schema = Joi.object().keys({
        id: Joi.string().min(3).max(10).required(),
        pw: Joi.string().min(6).max(20).required(),
        email: Joi.string().email().required(),
        name: Joi.string().min(1).max(10).required()
    })
    const result = Joi.validate({ id: id, pw: pw, email: email, name: name }, schema)
    if (result.error) {
        console.log(result.error)
        return res.status(400).json({
            code: 0
        })
    }
    Account.findOne({ "id": id }).exec().then(user => {
        if (user) {
            return res.status(401).json({
                code: 1
            })
        }
        Account.findOne({ "email": email }).exec().then(user => {
            if (user) {
                return res.status(401).json({
                    code: 2
                })
            }
            Account.findOne({ "name": name }).exec().then(user => {
                if (user) {
                    return res.status(401).json({
                        code: 3
                    })
                }
                let newUser = new Account({
                    id: id,
                    pw: pw,
                    email: email,
                    name: name
                })
                newUser.pw = newUser.generateHash(newUser.pw)
                newUser.save(err => {
                    if(err) throw err
                    return res.json({
                        success: true
                    })
                })
            }).catch(err => {
                throw err
            })
        }).catch(err => {
            throw err
        })
    }).catch(err => {
        throw err
    })
})

export default router