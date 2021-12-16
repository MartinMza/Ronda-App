const router = require('express').Router();
const {UserController} = require('../controllers');

router.put('/', UserController.update);
router.get('/users', UserController.allUsers);
router.get('/users/org', UserController.allUsersByOrg);
router.get('/skills', UserController.getSkills);
router.post('/skills', UserController.addSkill); //add skill to user using the req.body like {skill: 'skill name', level: 'skill level'} the level must be beginner, intermediate or advanced.
router.delete('/skills/:skillId', UserController.deleteSkill)

module.exports = router;