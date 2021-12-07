const router = require('express').Router();
const {superAdminController} = require('../../controllers/admin');

router.put('/:userId', superAdminController.promoteOrDepromoteAdmin);

module.exports = router;