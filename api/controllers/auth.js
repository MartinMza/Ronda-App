const { User } = require("../models");
const passport = require("passport");

class Auth {
  static async login(req, res) {
    try {
      res.send(req.user);
    } catch (error) {
      console.log(error);
    }
  }

  static async register(req, res) {
    try {
      if (req.body.role === "admin") {
        //you cant create an admin account
        return res.status(403).send({
          status: 403,
          error: "You are not allowed to create an admin account",
        });
      }
      if (req.body.role === "superAdmin") {
        const foundSuperAdmin = await User.findOne({
          where: { role: "superAdmin" },
        });
        if (foundSuperAdmin) {
          return res.status(403).send({
            status: 403,
            error: "Only one super admin account is allowed",
          });
        }
      }

      const found = await User.findOne({
        where: { email: req.body.email },
      });
      found && res.status(409).send("Email already exists");

      const user = await User.create(req.body);
      return res.status(201).send(user);
    } catch (error) {
      console.log(error);
    }
  }
  static async logout(req, res) {
    try {
      req.logout();
      res.send("logged out");
    } catch (error) {
      console.log(error);
    }
  }
  static async me(req, res) {
    req.user ? res.send(req.user) : res.sendStatus(401);
  }
}
module.exports = Auth;
