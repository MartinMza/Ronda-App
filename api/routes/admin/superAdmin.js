const router = require('express').Router();
const {superAdminController} = require('../../controllers/admin');

router.put('/:userId', superAdminController.promote);

router.delete('/:userId', superAdminController.deleteUser);

module.exports = router;