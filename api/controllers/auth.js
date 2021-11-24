const {User} = require("../models");
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
      const found = await User.findOne({
        where: { email: req.body.email },
      })
      found && res.status(409).send("Email already exists") 

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
  static async me (req, res) {
      req.user ? res.send(req.user) : res.sendStatus(401);
  }
}
module.exports = Auth;
