const router = require('express').Router();
const passport = require('passport');
const {AuthController} = require('../controllers');
const {User} = require('../models');
const jwt = require('jsonwebtoken');
const {localhost} = require('../../localHostIP.json')

// auth login

router.post('/login',passport.authenticate("local"), AuthController.login);

// auth logout

router.post('/logout', AuthController.logout);

// auth register

router.post('/register', AuthController.register);

// auth current

router.get('/me', AuthController.me);

//verify token

router.put('/verify/:otp', AuthController.verify);

//auth google


router.get(
    "/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );
  
  router.get(
    "/google/callback",
    passport.authenticate("google",  {
      successRedirect: `ronda://user`,
      failureRedirect: "http://localhost:19006/login",
    })
  );


module.exports = router;