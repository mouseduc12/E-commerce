const mongoose = require("mongoose")
const Schema = mongoose.Schema


const gardenSculptureSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    price: String,
    image: String,
    otherImages: [{
        type: String,
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
    },
    quantity: {
        type: Number,
        default: 1,
        min: 1
    } 
})

module.exports = mongoose.model("gardenSculpture", gardenSculptureSchema)

