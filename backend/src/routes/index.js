import express from 'express';
import account from './account'

const router = express.Router()

router.use('/auth', account)

router.get('/heart_beat', (req,res) => {
    return res.send('It works!')
})

export default router;