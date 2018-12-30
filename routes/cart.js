const express = require("express");
const cartRouter = express.Router()
const Cart = require("../models/cart")
const ProductCollection = require("../models/productCollection")

cartRouter.get("/:userId", (req, res, next) => {
    Cart.find({ user: req.params.userId }, (err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

cartRouter.post("/:userId", (req, res, next) => {
    const UserCart = new Cart();
    UserCart.user = req.params.userId
    UserCart.save((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(data)
    })
})

cartRouter.post("/:userId/:id", async (req, res, next) => {
    let productData;
    try {
        productData = await ProductCollection.findOne({ _id: req.params.id })
    }
    catch (err) {
        console.log(err)
    }
    if (productData._id) {
        Cart.update({ user: req.params.userId }, { $push: { products: productData } }, (err, data) => {
            if (err) {
                res.status(500);
                return next(err)
            }
            return res.status(201).send(data)
        })
    }
})

cartRouter.delete("/:userId/:id", (req, res, next) =>{
    Cart.update({user: req.params.userId}, { $pull: {products: {_id: req.params.id}}}, (err, data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send("Data deleted!")
    }) 
})

module.exports = cartRouter