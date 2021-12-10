const {User, Skill} = require('../models');

class UserController {
    static async allUsersByOrg (req, res) {
        try {
            const users = await User.findAll({
                where: {
                    organizationId: req.user.organizationId,
                },
            });
        
            return res.status(200).json(users);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
    static async update (req, res) {
        try {
            const user = await User.findOne({
                where: {
                    id: req.user.id,
                },
            });
            if(req.body.role) {
                return res.status(401).send({
                    message: 'You are not authorized to change your role'
                })
            }
            const updatedUser = await user.update(req.body);
            return res.status(200).json(updatedUser);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
    static async addSkill (req, res) {
        try {
            const skill = await Skill.create({
                skill: req.body.skill,
                level: req.body.level,
                userId: req.user.id,
            })
        }catch (err) {
            return res.status(400).json(err);
        }
    }
    static async getSkills (req, res) {
        try {
            const skills = await Skill.findAll({
                where: {
                    userId: req.user.id,
                },
            });
            return res.status(200).json(skills);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
    static async deleteSkill (req, res) {
        try {
            const skill = await Skill.destroy({
                where: {
                    id: req.params.skillId,
                },
            });
            return res.status(200).json(skill);
        } catch (err) {
            return res.status(400).json(err);
        }
    }
}


module.exports = UserController;
    