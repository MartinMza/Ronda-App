const { Like } = require("../models");

class LikeController {
  static async getLikes(req, res) {
    try {
      const likes = await Like.findAll({
        where: {
          postId: req.params.id,
        },
      });
      res.send(likes);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async create(req, res) {
    try {
      const like = await Like.create({
        userId: req.user.id,
        postId: req.params.id,
      });
      res.send(like);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async destroy(req, res) {
    try {
      const like = await Like.destroy({
        where: {
          userId: req.user.id,
          postId: req.params.id,
        },
      });
      res.send(like);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = LikeController;
