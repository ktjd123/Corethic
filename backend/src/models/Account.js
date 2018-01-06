import mongoose from 'mongoose'

const Schema = mongoose.Schema()

const Account = Schema({
    id: String,
    pw: String,
    email: String,
    name: String,
    lv: {type: Number, default: 0},
    registerd: {type: Date, default: new Date()}
})

export default mongoose.model('Account', Account);