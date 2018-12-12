const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")


app.use(express.json())
app.use(morgan("dev"))
app.use("/mansuits", require("./routes/manSuits"))

mongoose.connect("mongodb://localhost:27017/men-suit", {useNewUrlParser: true} ,() =>{
    console.log("I'm connected")
})

app.get("/", (req,res) => {
    res.send("Hello")
})

app.listen(8000, () =>{
    console.log("Working")
})














//const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const shoppingCartSchema = new Schema({
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: "User"
//     },
//     boots: [{
//         type: Schema.Types.ObjectId,
//         ref: "Boots"
//     }],
//     shirts: [{
        
//     }]
// })

// module.expors = mongoose.model("ShoppingCart", shoppingCartSchema)