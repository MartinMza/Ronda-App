const router = require('express').Router();
const {LikeController} = require('../controllers');

router.get('/:id', LikeController.getLikes);

router.get('/:id/single', LikeController.getLike);

router.post('/:id', LikeController.create); //the params are the id of the post

router.delete('/:id', LikeController.destroy);

module.exports = router;