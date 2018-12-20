const express = require("express")
const userRouter = express.Router()
const User = require("../models/user")

userRouter.get("/", (req, res, next) => {
    User.find((err,data) => {
        if(err){
            res.send(500)
            return next(err)
        }
        return res.status(200).send(res)
    })
})



module.exports = userRouter