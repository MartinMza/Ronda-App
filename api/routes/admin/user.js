const router = require('express').Router();
const {adminUserController} = require('../../controllers/admin');

router.get('/all', adminUserController.all);

router.get('/:userId', adminUserController.getUsers);


router.delete('/:userId', adminUserController.deleteUser);

module.exports = router;