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

  static async getLike(req, res) {
    try {
      const like = await Like.findOne({
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

  static async create(req, res) {
    try {
      console.log("CHECK USER AND ID", req.user.id, req.params.id);
      const checkLike = await Like.findOne({
        //chequea si el usuario ya le dio like
        where: { userId: req.user.id, postId: req.params.id },
      });
      console.log("AAAA|", checkLike);
      if (checkLike.postId) {
        return res.status(401).send("like already set");
      }
      console.log("CHECK USER AND ID in likecreate", req.user.id, req.params.id);
      const like = await Like.create({
        
        // da el like
        userId: req.user.id,
        postId: req.params.id,
      });
      console.log("LIKEEEEE", like);
      return res.status(201).send(like);
    } catch (err) {
      console.log("ERROR 500");
      return res.status(500).send(err);
    }
  }

  static async destroy(req, res) {
    try {
      console.log("destroy user", req.user);
      const like = await Like.findOne({
        where: {
          userId: req.user.id,
          postId: req.params.id,
        },
      });
      console.log("checking back like-->", like);
      if (req.user.id !== like.userId && req.user.role !== "admin") {
        return res.status(403).json({
          message: "You are not authorized to remove this like",
        });
      }
      like.destroy();
      res.send(like);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = LikeController;
