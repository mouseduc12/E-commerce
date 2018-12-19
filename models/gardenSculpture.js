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
    }
})

module.exports = mongoose.model("gardenSculpture", gardenSculptureSchema)

// {
// 	"headline": "Brussel's Live Dawn Redwood Grove Outdoor Bonsai Tree",
// 	"price": "$89.99", 
// 	"image": "https://images-na.ssl-images-amazon.com/images/I/81onCfvgPzL._SY450_.jpg",
// 	"otherImages": ["https://images-na.ssl-images-amazon.com/images/I/81fzG8qvrPL._SX466_.jpg","https://images-na.ssl-images-amazon.com/images/I/71PoXxYtg8L._SY450_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81oKrG5RvVL._SY450_.jpg", "https://images-na.ssl-images-amazon.com/images/I/81KUsNIw0UL._SY450_.jpg"],
// 	"description": ["USES: Ideal Mother’s Day gift, office & cubicle décor or a centerpiece for any kitchen table, desktop, window plant or outdoor décor.", "CONTENTS: Bonsai, Decorative Container (Assorted Colors & Styles), Soil, Care Instructions.", "SPECIES: The original Dawn Redwood Bonsai trees are hearty conifers that have a lacey type of needled foliage on gracefully upswept branches. The needles are deciduous and quite pretty in the fall when the airy light green spray turns to yellow and then to bronze before shedding from the trees."]
// }