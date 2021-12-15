const router = require('express').Router();
const {MessageController} = require('../controllers');

router.get('/:id', MessageController.getMessagesBetweenYouAndParams) //the id is the receiver id
router.get('/', MessageController.getChats)
router.post('/:id', MessageController.sendMessage)
router.put('/:id', MessageController.updateMessage)
router.delete('/:id', MessageController.deleteMessage)


module.exports = router;