const express = require("express")
const wishListRouter = express.Router()
const WishListSchema = require("../models/wishList")
const ProductCollection = require("../models/productCollection")

wishListRouter.get("/", (req, res, next) => {
    WishListSchema.find((err, data) => {
        if (err) {
            res.status(500);
            return next(err)
        }
        return res.status(200).send(data)
    })
})

wishListRouter.get("/:userId", (req, res, next) => {
    WishListSchema.findOne({ user: req.params.userId }, (err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

wishListRouter.post("/:userId", (req, res, next) => {
    const wishList = new WishListSchema();
    wishList.user = req.params.userId
    wishList.save((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(data)
    })
})

wishListRouter.post("/:userId/:id", async (req, res, next) => {
    let productData;
    try {
        productData = await ProductCollection.findOne({ _id: req.params.id })
    }
    catch (err) {
        console.log(err)
    }
    if (productData._id) {
        WishListSchema.update({ user: req.params.userId }, { $push: { products: productData } }, (err, data) => {
            if (err) {
                res.status(500);
                return next(err)
            }
            return res.status(201).send(data)
        })
    }
})

wishListRouter.put("/:userId/:id", (req, res, next) => {
    WishListSchema.findOne({ user: req.params.userId}, (err, data) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        const data1 = data.toObject()
        console.log(req.params.id)
        const found = data1.products.filter(prod => prod._id.toString() !== req.params.id.toString())
        // console.log(found)
        const newData = data1.products.splice(0, data1.products.length-1, found)
        console.log(data1.products.length-1)
        console.log(data1)
        console.log()
    
        WishListSchema.findOneAndUpdate({ user: req.params.userId }, {products: newData}, {new: true}, (err, data) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(data)
        })
    })
})

module.exports = wishListRouter