const router = require('express').Router();
const {ReservationController} = require('../controllers');

//get turno
router.get('/room/:roomId/day/:day/time/:time', ReservationController.turno)
//Get all reservations
router.get('/all', ReservationController.getAll)
//Get reservation by current User
router.get ('/own', ReservationController.getByCurrentUser)
//get reservation by user id
router.get('/user/:UserId', ReservationController.getByUserId)
//get reservations by room id
router.get('/room/:roomId', ReservationController.getByRoom)
//get turnos filtrados
router.get('/campus/:campusName/room/:id', ReservationController.getTurnosFiltrados)


//--------------------------------------


//Make reservation
router.post('/reserve/:turnId', ReservationController.reserve)
//Update reservation

//Delete reservation
router.delete('/cancel/:reservationId', ReservationController.cancel)



module.exports = router;