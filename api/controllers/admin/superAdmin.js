const {User} = require("../../models")

class SuperAdminController {
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



module.exports = SuperAdminController;