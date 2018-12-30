const express = require("express")
const googleRouter = express.Router()
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
// const { initialize } = require("passport-google-oauth20")
const User =  require("../models/user")

passport.serializeUser((user, done) => {
    done(null, user.id);
});
  
passport.deserializeUser((id, done) => {
    // console.log(`id: ${id}`);
    User.findById(id)
      .then((user) => {
        done(null, user);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
    });
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLECLIENTID,
        clientSecret: process.env.GOOGLESECRET,
        callbackURL: "/auth/google/callback"
    }, async (accessToken, refreshToken, profile, email, done) => {
        
        console.log("access Token: " + accessToken)
        console.log("profile: " + profile)
        console.log(email)
        
       
            try {
              const existingUser = await User.findOne({ googleId: profile.id });
              if (existingUser) {
                return done(null, existingUser);
              }
              const user = await new User({
                googleId: profile.id,
              }).save();
              done(null, user);
            } catch (error) {
              console.log('Error ' + error);
            }
       
        
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
        
        return res.redirect("/");
    })

module.exports = googleRouter