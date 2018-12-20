const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type:String,
        required: true,
        limit: 1200
    },
    feature_image: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comment: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "user"
            },
            text: String
        }
    ]  
})

module.exports = mongoose.model("Article", articleSchema)