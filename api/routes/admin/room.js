const router = require('express').Router();
const {adminRoomController} = require('../../controllers/admin');

router.post('/', adminRoomController.createRoom);

router.put('/:roomId', adminRoomController.updateRoom);

router.delete('/:roomId', adminRoomController.deleteRoom);

module.exports = router;