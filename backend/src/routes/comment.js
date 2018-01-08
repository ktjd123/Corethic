import express from 'express'
import Comment from '../models/Comment'
import Post from '../models/Post'
import Joi from 'joi'

const router = express.Router()

router.post('/add', (req, res) => {
    const body = req.body
    const schema = Joi.object().keys({
        id: Joi.string().trim().required(),
        content: Joi.string().trim().min(1).max(30).required()
    })
    const result = Joi.validate({ id: body.id, content: body.content }, schema)
    if (result.error) {
        return res.status(400).json({
            code: 0
        })
    }
    if (typeof req.session.loginInfo === "undefined") {
        return res.status(403).json({
            code: 1
        })
    }
    Post.findById(body.id).exec().then(post => {
        if (!post) {
            return res.status(404).json({
                code: 2
            })
        }
        const newComment = new Comment({
            post: body.id,
            writer: req.session.loginInfo.name,
            content: body.content
        })
        post.views = post.views + 2
        post.save(err => {
            if (err) throw err
            newComment.save(err => {
                if (err) throw err;
                return res.json({
                    success: true
                })
            })
        })
    })
})

router.post('/get', (req, res) => {
    const body = req.body
    const schema = Joi.object().keys({
        id: Joi.string().trim().required()
    })
    Comment.find({ "post": body.id }).sort({ "date": -1 }).exec().then(comments => {
        return res.json(comments)
    }).catch(err => {
        throw err
    })
})

export default router