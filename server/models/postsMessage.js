import mongoose from "mongoose";

const postSchma = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createAt: {
        type: Date,
        default: new Date()
    }
});

 const PostMessage = mongoose.model('PostMessage', postSchma);
 
 export default PostMessage;