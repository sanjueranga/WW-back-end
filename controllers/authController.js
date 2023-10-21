const session = require('express-session');
const strategy = require('./utils/auth');
const User = require('../models/userModel')
// Set up the necessary middleware for Passport
app.use(session({
    secret: process.env.SECRET, // Replace with a strong, random secret
    resave: false,
    saveUninitialized: true,
    cookie:{secure:false}
  }));


exports.loginWithGoogle = async (req, res) => {
    strategy.authenticate('google', { scope: ['email', 'profile'] })(req, res, async () => {
      // This function will be called after authentication
      if (req.user) {
        // User is authenticated, you can retrieve the user from req.user
        const user = req.user;
  
        // Find the user in your Mongoose User model by email
        try {
          const existingUser = await User.findOne({ email: user.email });
  
          if (existingUser) {
            // User with the email already exists in your model
            return res.json({ user: existingUser, profile: user.profile });
          } else {
            // User doesn't exist in your model; you can choose to create a new user here if needed
            return res.json({ error: 'User not found' });
          }
        } catch (error) {
          return res.status(500).json({ error: 'Internal server error' });
        }
      } else {
        // Authentication failed
        return res.status(401).json({ error: 'Authentication failed' });
      }
    });
  };




  exports.getProfile = (req, res) => {
    if (req.user) {
      // Access user details from req.user
      const user = req.user;
  
      // Now you can access user properties like user.email and user.profile
      const userEmail = user.email;
      const userName = user.name;
      const userProfilePicture = user.image;
  
      // Render the user details along with the profile picture
      res.send(`
        <h2>User Email: ${userEmail}</h2>
        <h2>User Name: ${userName}</h2>
        <img src="${userProfilePicture}" alt="User Profile Picture">
      `);
    } else {
      // Handle the case where no user is logged in
      // You can redirect to the login page or handle this as needed.
      res.send('<h2>User Email: no log in </h2>');
    }
  };
  
  exports.googleCallback = (req, res) => {
    passport.authenticate('google', {
      successRedirect: '/profile',
      failureRedirect: '/auth/google/failure'
    })(req, res);
  };
  
  