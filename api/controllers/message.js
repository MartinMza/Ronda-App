const { Message } = require("../models");
const S = require("sequelize");

class MessageController {
  static async sendMessage(req, res) {
    try {
      const message = await Message.create({
        senderId: req.user.id,
        receiverId: req.params.id,
        message: req.body.message,
        userEmail: req.user.email,
      });
      res.status(201).json(message);
    } catch (err) {
    console.log("ERRORRRR",err)
      res.status(500).send(err);
    }
  }
  static async deleteMessage(req, res) {
    try {
      const message = await Message.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!message) {
        return res.status(404).json({
          message: "Message not found",
        });
      }
      await message.destroy();
      return res.status(204).json();
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async updateMessage(req, res) {
    try {
      const message = await Message.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!message) {
        return res.status(404).json({
          message: "Message not found",
        });
      }
      await message.update({
          message: req.body.message
      });
      return res.status(204).json({
        message: "Message updated",
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getMessagesBetweenYouAndParams(req, res) {
    try {
      const messages = await Message.findAll({
          //get all messages where between sender and receiver
        where: {
            [S.Op.or]: [ { senderId: req.user.id, receiverId: req.params.id }, { senderId: req.params.id, receiverId: req.user.id } ]
        },
      });
      console.log("MESSAGES",messages)
      res.status(200).json(messages);
    } catch (err) {
        console.log("ERROR",err)
      res.status(500).json(err);
    }
  }
}

module.exports = MessageController;