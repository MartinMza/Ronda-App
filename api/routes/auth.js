const router = require('express').Router();
const passport = require('passport');
const {AuthController} = require('../controllers');

// auth login

router.post('/login',passport.authenticate("local"), AuthController.login);

// auth logout

router.post('/logout', AuthController.logout);

// auth register

router.post('/register', AuthController.register);

// auth current

router.get('/me', AuthController.me);

//auth google

router.get(
    "/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );
  
  router.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: "http://localhost:19006/",
      failureRedirect: "http://localhost:19006/login",
    })
  );

module.exports = router;