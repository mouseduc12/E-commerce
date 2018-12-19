const mongoose = require("mongoose")
const Schema = mongoose.Schema


const outdoorSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    price: String,
    image: String,
    otherImages: [{
        type: Array,
        required: true
    }],
    description: [{
        type: String,
        required: true
    }], 
    relatedProduct: {
        type: [{
            type: Object 
        }]
    }
})

module.exports = mongoose.model("OutDoor", outdoorSchema)