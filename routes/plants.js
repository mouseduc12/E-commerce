const express = require("express")
const plantRouter = express.Router()
const plantSchema = require("../models/plant")

plantRouter.get("/", (req, res, next) => {
    plantSchema.find((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

plantRouter.post("/", (req, res, next) => {
    const newPlant = new plantSchema(req.body)
    newPlant.save((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

plantRouter.put("/:id", (req, res, next) =>{
    plantSchema.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err ,data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(data)
    })
})


module.exports = plantRouter
