const express = require("express")
const app = express()
require('dotenv').config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const expressJwt = require("express-jwt")
const passport = require("passport")
// const GoogleStrategy = require("passport-google-oauth20").Strategy
const path = require("path")
const PORT = process.env.PORT || 8000



// app.use(passport.initialize());
// app.use(passport.session());
app.use(express.json())
app.use(morgan("dev"))
app.use("/plants", require("./routes/plants"))
app.use("/sculptures", require("./routes/gardenSculptures"))
app.use("/lights", require("./routes/outdoorLights"))
app.use("/firepits", require("./routes/firePits"))
app.use("/articles", require("./routes/articles"))
app.use("/user", require("./routes/users"))
app.use("/productCollections", require("./routes/productCollections"))
// app.use("/auth", require("./routes/googleRoute"));
app.use("/cart", require("./routes/cart"))
app.use("/wishList", require("./routes/wishLists"))
app.use(express.static(path.join(__dirname, "client", "build")))



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/garther", { useNewUrlParser: true }, () => {
    console.log("I'm connected")
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")) 
});

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ error: err.message })
})

app.listen(PORT, () => {
    console.log("Working")
})



//app.use("/api", expressJwt({secret: process.env.SECRET}))










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
