const router = require('express').Router();
const {AdminController, RoomController} = require('../controllers');


//-------------User Routes-------------//

router.get('/user/:userId', AdminController.getUsers);

router.put('/user/:userId', AdminController.promoteOrDepromoteAdmin);

router.delete('/user/:userId', AdminController.deleteUser);

//-------------Comment Routes-------------//

router.delete('/comment/:userId', AdminController.deleteComment);

//-------------Post Routes-------------//

router.delete('/post/:postId', AdminController.deletePost);

//-------------Room Routes-------------//

router.post('/room', RoomController.createRoom);

router.put('/room/:roomId', RoomController.updateRoom);

router.delete('/room/:roomId', RoomController.deleteRoom);

module.exports = router;


