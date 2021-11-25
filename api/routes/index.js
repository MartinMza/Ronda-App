const router = require('express').Router();
const {checkAuth, checkAdmin, checkSuperAdmin} = require('../middlewares/checkAuth');
const auth = require('./auth');
const post = require('./post');
const like = require('./like');
const comment= require('./comment')
const room= require('./room')
const user= require('./user')
const message= require('./message');
const admin = require('./admin');


router.use('/auth', auth);
router.use('/admin', checkAdmin, admin);
router.use('/posts',checkAuth, post);
router.use('/likes',checkAuth, like);
router.use('/comment',checkAuth, comment);
router.use('/room',checkAuth, room);
router.use('/user',checkAuth,user);
router.use('/message',checkAuth,message);

module.exports = router;


