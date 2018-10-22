const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const passport = require('passport');

const User = mongoose.model('users');

passport.serializeUser((user, done)=>{
    
  done(null, user.id);
  console.log('user serialized')

})

passport.deserializeUser((id, done) => {
  User.findById(id)
      .then((user)=>{
          done(null, user);
          
      })
})
  


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/api/auth/google/callback",
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({googleID: profile.id})

    
    
        if(!existingUser){
            
            const newUser = await new User({googleID: profile.id}).save();
            
            done(null, newUser)
        }
        else {
            
            done(null, existingUser);
        }
  }
));


