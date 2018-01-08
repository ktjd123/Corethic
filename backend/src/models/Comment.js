import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Comment = new Schema({
    post: Schema.Types.ObjectId,
    writer: String,
    content: String,
    date: {type: Date, expires: 3660 ,default: Date.now}
})

Comment.index({date: -1})

export default mongoose.model('Comment', Comment)