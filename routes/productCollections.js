const express = require("express")
const productRouter = express.Router()
const FirePits = require("../models/firePit")
const OutdoorLights = require("../models/outdoorLight");
const Plants = require("../models/plant");
const GardenSculpture = require("../models/gardenSculpture")
const ProductCollection = require("../models/productCollection")

productRouter.get("/", (req, res, next) => {
    ProductCollection.paginate({}, {
        page: req.query.page,
        limit: 12,
    }, (err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})


// productRouter.post("/", async (req, res, next) => {
//     let pits;
//     let lights;
//     let gardenSculptures;
//     let plants
//     try {
//         pits = await FirePits.find()
//         lights = await OutdoorLights.find()
//         gardenSculptures = await GardenSculpture.find()
//         plants = await Plants.find()
//     }
//     catch (err) {
//         res.status(500)
//         return next(err)
//     }
//     const products = [...pits, ...lights, ...gardenSculptures, ...plants]
//     for (let each of products) {
//         let newProducts = new ProductCollection(each)
//         newProducts.save((err, data) => {
//             if (err) {
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(201).send(data)
//         })
//     }
// })

module.exports = productRouter

// {
//     plants: plants,
//     outdoorLights: lights,
//     firePits: pits,
//     gardenSculptures: gardenSculptures
// }