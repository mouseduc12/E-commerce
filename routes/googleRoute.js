const express = require("express")
const googleRouter = express.Router()
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLECLIENTID,
        clientSecret: process.env.GOOGLESECRET,
        callbackURL: "/auth/google/callback"
    }, (accessToken, refreshToken, profile, email, done) => {
        console.log("access Token: " + accessToken)
        console.log("refresh token" + refreshToken)
        console.log("profile: " + profile)
        console.log(email)
    })
)


googleRouter.get(
    "/google",
    passport.authenticate("google", {
        scope: ['profile', 'email']
    })
)

googleRouter.get('/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login' }),
    (req, res, next) => {
        console.log(res)
        res.redirect("/");
    })

module.exports = googleRouter