const express = require("express")
const sculptureRouter = express.Router()
const gardenSculpture = require("../models/gardenSculpture")

sculptureRouter.get("/", (req, res, next) => {
    gardenSculpture.find((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

sculptureRouter.post("/", (req, res, next) => {
    const newSculpture = new gardenSculpture(req.body)
    newSculpture.save((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})

sculptureRouter.put("/:id", (req, res, next) => {
    gardenSculpture.findOneAndUpdate({ _id: req.params.id },
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

module.exports = sculptureRouter;