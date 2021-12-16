const {User} = require("../../models")

class SuperAdminController {
    // SUPER ADMIN 
    static async promote(req, res) {
        if (req.user.role !== "superadmin") return res.sendStatus(401);
        try {
          const user = await User.findOne({
            where: {
              id: req.params.userId,
            },
          });
          await user.update({
            role:"admin"})
          return res.send(user);
        } 
        catch (err) {
        return res.status(500).send(err);
        }
    }

    static async deleteUser(req, res) {
      try {
        const user= await User.findOne({
          where:{
            id: req.params.userId
          }
        })
          await user.destroy()
          return res.sendStatus(200);
        }
       catch (err) {
          return res.status(500).send(err);
      }
  }

}



module.exports = SuperAdminController;