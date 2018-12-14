const mongoose = require("mongoose")
const Schema = mongoose.Schema

const plantSchema = new Schema({
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
    reviews: {
        type: Number,
        max: 5,
        min: 1
    } 
}) 

module.exports = mongoose.model("PlantSchema", plantSchema)