const { Comment } = require("../models");

class CommentController {
  static async addComment(req, res) {
    try {
      const comment = await Comment.create({
        comment: req.body.comment,
        userId: req.user.id,
        postId: req.params.id,
      });
      return res.status(201).send(comment);
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
  static async deleteComment(req, res) {
    try {
      const comment = await Comment.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!comment) {
        return res.status(404).json({
          message: "Comment not found",
        });
      }
      if (req.user.id !== comment.userId && req.user.role !== "admin") {
        return res.status(403).json({
          message: "You are not authorized to delete this comment",
        });
      }
      await comment.destroy();
      return res.status(204).json();
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
  static async getCommentsByPostId(req, res) {
    try {
      const comments = await Comment.findAll({
        where: {
          postId: req.params.id,
        },
      });
      return res.status(200).json(comments);
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
  static async updateComment(req, res) {
    try {
      const comment = await Comment.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!comment) {
        return res.status(404).json({
          message: "Comment not found",
        });
      }
      if (req.user.id !== comment.userId && req.user.role !== "admin") {
        return res.status(403).json({
          message: "You are not authorized to update this comment",
        });
      }
      await comment.update({
        comment: req.body.comment,
      });
      return res.status(200).json(comment);
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
}

module.exports = CommentController;
