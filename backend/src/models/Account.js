import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const Schema = mongoose.Schema

const Account = new Schema({
    id: String,
    pw: String,
    email: String,
    name: String,
    lv: {type: Number, default: 0},
    registerd: {type: Date, default: new Date()}
})

Account.index({id: 1, name: 1})

Account.methods.generateHash = function(pw) {
    return bcrypt.hashSync(pw, 8)
}

Account.methods.compareHash = function(pw){
    return bcrypt.compareSync(pw, this.pw)
}

export default mongoose.model('Account', Account);