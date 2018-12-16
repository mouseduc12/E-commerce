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
// articleSchema.methods.love = function() {
//     this.love++
//     return this.save()
// }

// articleSchema.methods.comment = function(comment) {
//     this.comment.push(comment)
//     return this.save()
// }
// articleSchema.methods.addAuthor = function(author_id) {
//     this.author = author_id
//     return this.save()
// }
// articleSchema.methods.getAuthorArticle = function(_id) {
//     articleSchema.find()
// }

module.exports = mongoose.model("BlogSchema", articleSchema)