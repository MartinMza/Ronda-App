const { Room } = require("../models");

class RoomController {
  static async getRoomById(req, res) {
    try {
      const room = await Room.findByPk(req.params.roomId);
      return res.status(200).send(room);
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
  static async getAllRooms(req, res) {
    try {
      const rooms = await Room.findAll();
      return res.status(200).send(rooms);
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
}

module.exports = RoomController;
