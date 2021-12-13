const router = require('express').Router();
const user = require('./user')
const reservation = require('./reservation')
const room = require('./room')
const post = require('./post')
const comment = require('./comment')
const membership = require('./membership')
const superAdmin = require('./superAdmin')
const organization = require('./organization')

router.use('/user', user)
router.use('/reservation', reservation)
router.use('/room', room)
router.use('/post', post)
router.use('/comment', comment)
router.use('/membership', membership)
router.use('/superAdmin', superAdmin)
router.use('/organization', organization)

module.exports = router;
