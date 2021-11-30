const router = require('express').Router();
const {OrganizationController} = require('../controllers');

router.get('/', OrganizationController.getAllEmpresas);

router.post('/empresa', OrganizationController.createEmpresa);
router.post('/particular', OrganizationController.createParticular);

router.put('/empresa/:name', OrganizationController.addUserToOrganization);//para agregar al usuario logeado a la empresa pasada por parametro
router.put('/confirm/:userId', OrganizationController.confirmUser);

module.exports = router;