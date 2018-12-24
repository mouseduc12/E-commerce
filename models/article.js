const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    firstContentImage: {
        type: String
    },
    firstContent: {
        type: String,
        required: true,
        limit: 1200
    },
    secondImageContent: {
        type: String
    },
    secondContent: {
        type: String,
        required: true,
        limit: 1200
    },
    featureImage: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    Date: {
        type: Date,
        default: Date.now()
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