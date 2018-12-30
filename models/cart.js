const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    products: [{
        type: Object,    
    }]
})

module.exports = mongoose.model("Cart", cartSchema)