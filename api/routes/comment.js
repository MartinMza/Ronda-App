const router = require('express').Router();
const {CommentController} = require('../controllers');

router.post("/:id", CommentController.addComment);
router.delete("/:id", CommentController.deleteComment);
router.put("/:id",CommentController.updateComment);
router.get("/:id",CommentController.getCommentsByPostId);


module.exports = router;














