import Post from '../models/Post'
import express from 'express'
import Joi from 'joi'

const router = express.Router()

router.post('/write', (req, res) => {
    const body = req.body
    const schema = Joi.object().keys({
        title: Joi.string().trim().min(1).max(20).required(),
        content: Joi.string().trim().min(1).max(300).required(),
        board: Joi.string().trim().min(1).max(10).required(),
        type: Joi.bool().required()
    })
    const result = Joi.validate({ title: body.title, content: body.content, board: body.board, type: body.type }, schema)
    if (result.error) {
        return res.status(400).json({
            code: 0
        })
    }
    if (typeof req.session.loginInfo === 'undefined') {
        return res.status(403).json({
            code: 1
        })
    }
    const post = new Post({
        title: body.title,
        writer: req.session.loginInfo.name,
        content: body.content,
        board: body.board,
        type: body.type
    })
    post.save(err => {
        if (err) throw err
        return res.json({
            success: true
        })
    })
})

router.post('/get', (req, res) => {
    const body = req.body
    const schema = Joi.object().keys({
        board: Joi.string().trim().min(1).max(10).required(),
        limit: Joi.number().min(1).max(30).required()
    })
    const result = Joi.validate({ board: body.board, limit: body.limit }, schema)
    if (result.error) {
        return res.status(400).json({
            code: 0
        })
    }
    if (body.board === "all") {
        Post.find().sort({"views": -1}).sort({"date": -1}).limit(body.limit).exec().then(posts => {
            return res.json(posts)
        }).catch(err => {
            throw err
        })
    } else {
        Post.find({ "board": body.board }).sort({ "views": -1 }).sort({"date": -1}).limit(body.limit).exec().then(posts => {
            return res.json(posts)
        }).catch(err => {
            throw err
        })
    }
})

router.post('/detail', (req,res) => {
    const body = req.body
    const schema = Joi.object().keys({
        id: Joi.string().required()
    })
    const result = Joi.validate({id: body.id}, schema)
    if(result.error){
        return res.status(400).json({
            code: 0
        })
    }
    Post.findById(body.id).exec().then(post => {
        if(!post){
            return res.status(404).json({
                code: 1
            })
        }
        post.views = post.views + 1
        post.save(err => {
            if(err) throw err
            return res.json(post)
        })
    }).catch(err => {
        throw err
    })
})


export default router