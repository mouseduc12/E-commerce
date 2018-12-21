const express = require("express")
const authRouter = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")

authRouter.post("/signup", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (user) {
            res.status(403)
            return next(new Error("The Username is already taken"))
        }
        const newUser = new User(req.body)
        newUser.save((err, userData) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(userData.toObject(), process.env.SECRET)
            return res.status(201).send({ userData: userData.toObject(), token })
        })
    })
})

authRouter.post("/login", (req, res, next) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user || user.password !== req.body.password) {
             res.status(403)
             return next(new Error("Username or password are incorrect"))
        }
       const token = jwt.sign(user.toObject(), process.env.SECRET)
       return res.send({token: token, user: user.toObject(), success: true})
    })
})

module.exports = authRouter

// if (!user || user.password !== req.body.password) {
//     return res.status(403).send({success: false, err: "Username or password are incorrect"})
// }
// user.checkPassword(req.body.password, (err, match) => {
//     if (err) return res.status(500).send(err)
//     if (!match) res.status(404).send({ success: false, message: "Username or password is incorrect" })
//     const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
//     return res.send({
//         token: token, user: user.withoutPassword(), success: true
//     })
// })