const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const passport = require('passport')
const strategy = require('./utils/auth');
const checkAuthenticated= require('./middlewares/auth') 
const path = require('path');
const app = express();


app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');
app.use(express.json());

// Set up the necessary middleware for Passport
app.use(session({
    secret: process.env.SECRET, // Replace with a strong, random secret
    resave: false,
    saveUninitialized: true,
    cookie:{secure:false}
  }));

app.use(passport.initialize())
app.use(passport.session())





app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
