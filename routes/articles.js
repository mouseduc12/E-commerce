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

module.exports = articleRouter