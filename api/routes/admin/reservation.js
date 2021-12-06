const router = require('express').Router();
const {adminReservationController} = require('../../controllers/admin');

router.delete('/:reservationId/:userId', adminReservationController.cancel);

module.exports = router;