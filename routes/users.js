const express = require("express")
const authRouter = express.Router()
const User = require("../models/user")

authRouter.post("/signup", (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(500)
            return next(new Error("The Username is already taken"))
        }
        const newUser = new User(req.body)
        newUser.save((err, userData) =>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(userData)
        })
    })
})

authRouter.post("/login", (req, res, next) =>{
    User.findOne({username: req.body.username}, (err,user) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user || req.body.password !== user.password){
            res.status(500)
            return next(new Error("The password or username is wrong"))
        }
        return res.status(201).send(user)
    })
})

module.exports = userRouter