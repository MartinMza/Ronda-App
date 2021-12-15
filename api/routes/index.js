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
const organization = require('./organization');
const reservation = require('./reservation');
const calendar = require ('./calendar');
const membership = require ('./membership')


router.use('/auth', auth);
router.use('/calendar', checkAuth, calendar)
router.use('/admin', checkAuth, checkAdmin, admin);
router.use('/posts', post);
router.use('/likes',checkAuth, like);
router.use('/comment', comment);
router.use('/room',checkAuth, room);
router.use('/user', user);
router.use('/message', message);
router.use('/organization', organization);
router.use('/reservation', checkAuth, reservation);
router.use('/membership', checkAuth, membership);

module.exports = router;


