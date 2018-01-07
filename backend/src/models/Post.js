import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Post = new Schema({
    writer: Schema.Types.ObjectId,
    title: String,
    content: String,
    type: Boolean,
    date: {type: Date, default: new Date()}
})

export default mongoose.model('Post', Post)