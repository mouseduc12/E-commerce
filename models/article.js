const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    feature_image: {
        type: String,
        required: true
    },
    love: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: "admin"
    },
    comment: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "user"
            },
            text: string
        }
    ]  
})

module.exports = mongoose.model("BlogSchema", articleSchema)