
import Statics from '../models/Statics'

export const currentUser = function(err, req, res, next){
    let who = undefined
    if(typeof req.session.loginInfo === 'undefined'){
        who = 'nobody'
    }else{
        who = req.session.loginInfo.name
    }
    let user = new Statics({
        who: who
    })
    user.save(err => {
        throw err
    })
    next()
}