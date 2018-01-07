import Post from '../models/Post'
import express from 'express'
import Joi from 'joi'

const router = express.Router()

router.post('/write', (req,res) => {
    const body = req.body
    const schema = Joi.object().keys({
        title: Joi.string().trim().min(1).max(15).required(),
        content: Joi.string().trim().min(1).max(300).required(),
        board: Joi.string().trim().min(1).max(5).required(),
        type: Joi.bool().required()
    })
    const result = Joi.validate({title: body.title, content: body.content, board: body.board, type: body.type}, schema)
    if(result.error){
        return res.status(400).json({
            code: 0
        })
    }
    if(typeof req.session.loginInfo === 'undefined'){
        return res.status(403).json({
            code: 1
        })
    }
    const post = new Post({
        title: body.title,
        writer: req.session.loginInfo._id,
        content: body.content,
        board: body.board,
        type: body.type
    })
    post.save(err => {
        if(err) throw err
        return res.json({
            success: true
        })
    })
})


export default router