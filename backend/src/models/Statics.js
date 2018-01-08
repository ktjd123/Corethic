import mongoose from 'mongoose'

const Statics = new mongoose.Schema({
    who: String,
    date: {type: Date, expires:60, default: Date.now}
})

export default mongoose.model('Statics', Statics)