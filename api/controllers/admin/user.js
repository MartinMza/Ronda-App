const {User} = require("../../models")

class AdminUserController {
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
            await User.destroy({
              where: {
                id: req.params.userId,
              },
            });
            res.sendStatus(200);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

module.exports = AdminUserController