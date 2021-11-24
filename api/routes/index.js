const router = require('express').Router();
const checkAuth = require('../middlewares/checkAuth');
const auth = require('./auth');
const post = require('./post');
const like = require('./like');

router.use('/auth', auth);
router.use('/posts',checkAuth, post);
router.use('/likes',checkAuth, like);

module.exports = router;