// middlewares/auth.js
module.exports = {
  checkAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      // If the user is authenticated, continue to the next middleware or route
      return next();
    } else {
      // If the user is not authenticated, you can choose how to handle it
      // For example, you can redirect them to a login page or send an error response
      res.status(401).send('Unauthorized'); // Adjust the response as needed
    }
  }
};
