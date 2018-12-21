const express = require("express")
const app = express()
require('dotenv').config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require("express-jwt")


app.use(express.json())
app.use(morgan("dev"))
app.use("/plants", require("./routes/plants"))
app.use("/sculptures", require("./routes/gardenSculptures"))
app.use("/lights", require("./routes/outdoorLights"))
app.use("/firepits", require("./routes/firePits"))
app.use("/api", expressJwt({secret: process.env.SECRET}))
app.use("/api/articles", require("./routes/articles"))
app.use("/user", require("./routes/users"))

app.use((err, req, res, next) =>{
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({error: err.message})
})

mongoose.connect("mongodb://localhost:27017/garther", {useNewUrlParser: true} ,() =>{
    console.log("I'm connected")
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