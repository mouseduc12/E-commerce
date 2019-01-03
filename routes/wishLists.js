const express = require("express")
const wishListRouter = express.Router()
const WishListSchema = require("../models/wishList")

wishListRouter.get("/:userId", (req, res, next) => {
    WishListSchema.find({ user: req.params.userId }, (err, data) => {
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

wishListRouter.delete("/:userId/:id", (req, res, next) =>{
    WishListSchema.update({user: req.params.userId}, { $pull: {products: {_id: req.params.id}}}, (err, data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send("Data deleted!")
    }) 
})

module.exports = wishListRouter