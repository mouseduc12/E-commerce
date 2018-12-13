const mongoose = require("mongoose")
const Schema = mongoose.Schema


const gardenSculptureSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    price: Number,
    image: String,
    otherImages: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    }, 
    relatedProduct: {
        type: [{
            type: Object 
        }]
    }
})

module.exports = mongoose.model("gardenSculpture", gardenSculptureSchema)