const router = require('express').Router();
const {adminPostController} = require('../../controllers/admin');

router.delete('/:postId', adminPostController.deletePost);

module.exports = router;