const mongoose = require("mongoose")
const Schema = mongoose.Schema

const wishList = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    products: [{
        type: Object,
    }]
})


module.exports = mongoose.model("WishList", wishList)