const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const paginate = require("mongoose-paginate")

const productCollection = new Schema({
    products: {
        type: Object
    }   
})

productCollection.plugin(paginate)
module.exports = mongoose.model("ProductCollection", productCollection)

