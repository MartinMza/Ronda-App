const router = require('express').Router();
const {adminOrganizationController} = require('../../controllers/admin');

router.put('/:orgId', adminOrganizationController.updateOrganization);

module.exports = router;