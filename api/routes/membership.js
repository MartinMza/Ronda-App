const router = require('express').Router();
const {MembershipController} = require('../controllers');

router.post('/', MembershipController.createMembership);

router.put('/:id', MembershipController.updateMembership);

router.get('/membershipName/:mname/organizationName/:oname', MembershipController.assignMembership);

module.exports = router;