const express = require("express")
const outdoorLightRouter = express.Router()
const OutDoorLightData = require("../models/outdoorLight")

outdoorLightRouter.get("/", (req, res, next) =>{
    OutDoorLightData.find((err, dataSet) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(dataSet)
    })
})

outdoorLightRouter.post("/", (req, res, next) =>{
    const newOutDoorLight = new OutDoorLightData(req.body)
    newOutDoorLight.save((err, data) => {
        if(err){
            res.status(501)
            return next(err)
        }
        return res.status(201).send(data)
    })
})

outdoorLightRouter.get("/:lightId" , (req, res, next) => {
    OutDoorLightData.findOne({_id: req.params.id}, (err, light) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(light)
    })
})

outdoorLightRouter.put("/:id", (req, res, next) => {
    OutDoorLightData.findOneAndUpdate({ _id: req.params.id },
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


module.exports = outdoorLightRouter