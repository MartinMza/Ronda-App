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

module.exports = router;