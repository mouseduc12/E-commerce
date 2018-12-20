const express = require("express")
const articleRouter = express.Router()
const ArticleSchema = require("../models/article")

articleRouter.get("/", (req, res, next) =>{
    ArticleSchema.find({user: req.user._id}, (err,data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

articleRouter.post("/", (req, res, next) =>{
    const newPost = new ArticleSchema(req.body)
    newPost.user = req.user._id
    newPost.save((err, newpost) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newpost)
    })
})

articleRouter.get("/:id", (req, res, next) => {
    ArticleSchema.findOne(
        {user: req.user._id, _id: req.params.id},
        (err,data) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(data)
    })
})

articleRouter.put("/:id", (req,res, next) =>{
    ArticleSchema.findOneAndUpdate(
        {user: req.user._id, _id: req.params.id}, 
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

articleRouter.delete("/:id", (req,res,next) => {
    ArticleSchema.findOneAndDelete(
        {user: req.user._id, _id: req.params.id},
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