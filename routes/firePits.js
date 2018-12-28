const express = require("express")
const firePitRouter = express.Router()
const FirePitSchema = require("../models/firePit")

firePitRouter.get("/", (req, res, next) => {
    FirePitSchema.paginate({}, {
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

firePitRouter.post("/", (req, res, next) => {
    const newFirePit = new FirePitSchema(req.body)
    newFirePit.save((err, data) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(data)
    })
})

firePitRouter.put("/:id", (req, res, next) => {
    FirePitSchema.findOneAndUpdate({ _id: req.params.id },
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

module.exports = firePitRouter