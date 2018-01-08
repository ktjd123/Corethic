import express from 'express'
import Statics from '../models/Statics'
const router = express.Router()

router.post('/get', (req,res) => {
    if(typeof req.session.loginInfo === 'undefined'){
        return res.status(403).json({
            code: 1
        })
    }
    if(!req.session.loginInfo.id === 'ktjd123'){
        return res.status(403).json({
            code: 1
        })
    }
    Statics.count().exec(count => {
        return res.json({
            count: count / 100
        })
    })
})

export default router