import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema({
    writer: String,
    board: String,
    title: String,
    content: String,
    type: Boolean,
    views: {type: Number, default: 0},
    date: {type: Date, expires: 3600, default: Date.now}
})

Post.index({writer: 1, title: 1, views: -1, date: -1})

export default mongoose.model('Post', Post)