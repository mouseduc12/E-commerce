const express = require("express")
const articleRouter = express.Router()
const ArticleSchema = require("../models/article")

articleRouter.get("/:userId", (req, res, next) =>{
    ArticleSchema.find({user: req.params.userId}, (err,data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

articleRouter.post("/:userId", (req, res, next) =>{
    const newPost = new ArticleSchema(req.body)
    newPost.user = req.params.userId
    newPost.save((err, newpost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newpost)
    })
})

articleRouter.get("/:userId/:id", (req, res, next) => {
    ArticleSchema.findOne(
        {user: req.params.userId, _id: req.params.id},
        (err,data) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(data)
    })
})

articleRouter.put("/:userId/:id", (req,res, next) =>{
    ArticleSchema.findOneAndUpdate(
        {user: req.params.userId, _id: req.params.id}, 
        req.body,
        {new: true},
        (err,data) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(data)
        })
})

articleRouter.delete("/:userId/:id", (req,res,next) => {
    ArticleSchema.findOneAndDelete(
        {user: req.user._i, _id: req.params.id},
        (err, deleteData) =>{
            if(err){
                res.status(500)
                next(err)
            }
            return res.status(202).send("Delete Successfully")
        }
    )
})

module.exports = articleRouter