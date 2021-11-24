const router = require('express').Router();
const {PostController} = require('../controllers');

//-----------------GET ROUTES-----------------//

router.get('/:campus', PostController.getAllByCampus);
router.get('/users/:id', PostController.getByUser);
router.get('/posts/:id', PostController.getByUser);

//-----------------POST ROUTES-----------------//

router.post('/', PostController.create);

//-----------------PUT ROUTES-----------------//

router.put('/:id', PostController.update);

//-----------------DELETE ROUTES-----------------//

router.delete('/:id', PostController.delete);

module.exports = router;

