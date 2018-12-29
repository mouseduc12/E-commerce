const express = require("express")
const articleRouter = express.Router()
const ArticleSchema = require("../models/article")

articleRouter.get("/", (req, res, next) => {
    console.log(req.query)
    ArticleSchema.paginate({},
        {
            page: req.query.page,
            limit: 3,
            populate: { path: "user", select: "faceImage firstName" }
        }, (err, data) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(data)
        })
})

articleRouter.get("/all", (req, res, next) =>{
    ArticleSchema.find((err, data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

articleRouter.post("/:userId", (req, res, next) => {
    const newPost = new ArticleSchema(req.body)
    newPost.user = req.params.userId
    newPost.save((err, newpost) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newpost)
    })
})

articleRouter.get("/:userId", (req, res, next) => {
    ArticleSchema.find({ user: req.params.userId })
        .populate({ path: "user", select: "faceImage firstName" })
        .exec((err, data) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(data)
        })
})

articleRouter.get("/:userId/:id", (req, res, next) => {
    ArticleSchema.findOne({ user: req.params.userId, _id: req.params.id })
        .populate({ path: "user", select: "faceImage firstName" })
        .exec((err, data) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(data)
        })

})  

articleRouter.get("/:userId/:id/next", (req, res, next) => {
    ArticleSchema.findOne({ _id: { $gt: req.params.id } })
        .sort({ _id: 1 })
        .exec((err, docs) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(docs)
        })
})

articleRouter.get("/:userId/:id/previous", (req, res, next) => {
    ArticleSchema.findOne({ _id: { $lt: req.params.id } })
        .sort({ _id: -1 })
        .exec((err, data) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(data)
        })
})

articleRouter.put("/:id", (req, res, next) => {
    ArticleSchema.findOneAndUpdate(
        { user: req.user._id, _id: req.params.id },
        req.body,
        { new: true },
        (err, data) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(data)
        })
})

articleRouter.delete("/:id", (req, res, next) => {
    ArticleSchema.findOneAndDelete(
        { user: req.user._id, _id: req.params.id },
        (err, deleteData) => {
            if (err) {
                res.status(500)
                next(err)
            }
            return res.status(202).send("Delete Successfully")
        }
    )
})

module.exports = articleRouter