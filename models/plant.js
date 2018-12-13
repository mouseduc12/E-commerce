const mongoose = require("mongoose")
const Schema = mongoose.Schema

const plantSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    price: Number,
    image: String,
    otherImages: {
        type: Array,
        required: true
    },
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

module.exports = plantSchema.model("PlantSchema", plantSchema)