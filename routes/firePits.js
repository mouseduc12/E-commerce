const express = require("express")
const firePitRouter = express.Router()
const FirePitSchema = require("../models/firePit")

firePitRouter.get("/", (req, res, next) =>{
    FirePitSchema.find((err,data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data) 
    })
})

firePitRouter.post("/", (req,res, next) =>{
    const newFirePit = new FirePitSchema(req,body)
    newFirePit.save((err, data) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(data)
    })
})


module.exports = firePitRouter