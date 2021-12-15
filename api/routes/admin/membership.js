const router = require('express').Router();
const {adminMembershipController} = require('../../controllers/admin');

router.post('/', adminMembershipController.createMembership);

router.put('/:id', adminMembershipController.updateMembership);

router.get('/:mname/:oname', adminMembershipController.assignMembership);

router.get('/all', adminMembershipController.getMemberships);

module.exports = router;