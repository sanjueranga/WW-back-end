const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALL_BACK_URL,
  },
  (accessToken, refreshToken, profile, done) => {
    
    const userData = {
      id: profile.id, // Or any other identifier
      email: profile.email,
      name: profile.displayName,
      image:  profile.photos[0].valu
    };

    return done(null, userData);
  }
));

passport.serializeUser((user,done)=>{
  done(null,user)
});

passport.deserializeUser((user,done)=>{
  done(null,user)
});


module.exports = passport;
