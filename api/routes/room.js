const router = require('express').Router();
const {RoomController} = require('../controllers');

router.get('/:roomId', RoomController.getRoomById )
router.get('/', RoomController.getAllRooms )

module.exports = router;


