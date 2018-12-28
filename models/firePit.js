const mongoose = require("mongoose")
const Schema = mongoose.Schema
const paginate = require("mongoose-paginate")


const firePitSchema = new Schema({
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

firePitSchema.plugin(paginate);
module.exports = mongoose.model("FirePitSchema", firePitSchema)