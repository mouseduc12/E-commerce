const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productCollection = new Schema({
    plants: [{
        type: Schema.Types.ObjectId,
        ref: "PlantSchema"
    }],
    firePits: [{
        type: Schema.Types.ObjectId,
        ref: "FirePitSchema" 
    }],
    outdoorLights: [{
        type: Schema.Types.ObjectId,
        ref: "OutDoor"
    }],
    gardenSculptures:[{
        type: Schema.Types.ObjectId,
        ref: "gardenSculpture" 
    }]   
}, {timestamps: true})

module.exports = mongoose.model("ProductCollection", productCollection)
