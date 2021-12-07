const router = require('express').Router();
const {adminCommentController} = require('../../controllers/admin');

router.delete('/:userId', adminCommentController.deleteComment);

module.exports = router;