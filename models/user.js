const mongoose = require("mongoose");
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
    },
    memberSince:{
        type: Date,
        default: Date.now
    },
    faceImage: {
        type: String
    }
})

module.exports = mongoose.model("User", userSchema);

