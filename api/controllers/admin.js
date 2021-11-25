const {User} = require("../models")

class AdminController {
    static async getUsers(req, res) {
        try {
          const users = await User.findAll({
            where: {
              id: req.params.userId,
            },
          });
          res.send(users);
        } catch (err) {
          res.status(500).send(err);
        }
    }

    static async deleteUser(req, res) {
        try {
            const user = await User.destroy({
              where: {
                id: req.params.userId,
              },
            });
            res.sendStatus(200);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    static async deleteComment(req, res) {
        try {
            const user = await User.destroy({
                where: {
                    id: req.params.userId,
                },
            });
            res.sendStatus(200);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    
    static async deletePost(req, res) {
        try {
            const user = await User.destroy({
                where: {
                    id: req.params.userId,
                },
            });
            res.sendStatus(200);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    
    // SUPER ADMIN 
    static async promoteOrDepromoteAdmin(req, res) {
        if (req.user.role !== "superAdmin") return res.sendStatus(401);
        try {
          const user = await User.update(req.body.role, {
            where: {
              id: req.params.userId,
            },
          });
          res.send(user);
        } catch (err) {
          res.status(500).send(err);
        }
    }

}



module.exports = AdminController;