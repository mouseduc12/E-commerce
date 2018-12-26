const express = require("express")
const productRouter = express.Router()
const ProductCollection = require("../models/productCollection")
const axios = require("axios")

// productRouter.get("/",(req,res,next) =>{
//    var option = {
//        url: "http://localhost:8000/plants",
//        headers: {
//            'User-Agent': 'request'
//        }
//    },

//    return new Promise(function(resolve, reject) {
//        request.get(option, function(err, res, body){
//            if(err){
//                reject(err)
//            } else{
//                resolve(JSON.parse(body))
//            }
//        })
//    })
// })



productRouter.get("/", (req, res, next) =>{
    ProductCollection.find()
    .populate("plants")
    .exec((err, data) =>{
        console.log("I'm runining?")
        console.log(data)
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

module.exports = productRouter