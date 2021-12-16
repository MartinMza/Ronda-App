const {User} = require("../../models")

class AdminUserController {

  static async all(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
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
          const user= await User.findOne({
            where:{
              id: req.params.userId
            }
          })
          if(user.role==="superadmin" || user.role==="admin"){
            return res.sendStatus(401)
          }else{
            await user.destroy()
            return res.sendStatus(200);
            };
          }
         catch (err) {
            return res.status(500).send(err);
        }
    }
}

module.exports = AdminUserController