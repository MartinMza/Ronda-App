const { Room } = require("../../models");

class AdminRoomController {
  //ADMIN METHODS--------------------------------------
  static async createRoom(req, res) {
    try {
      const room = await Room.create({
        name: req.body.name,
        description: req.body.description,
        credit_value: req.body.credit_value,
        capacity: req.body.capacity,
        campusId: req.body.campusId,
      });
      return res.status(201).send(room);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  static async updateRoom(req, res) {
    try {
      const room = await Room.findByPk(req.params.roomId);
      if (!room) {
        return res.status(404).json({
          message: "Room not found",
        });
      }
      const updatedRoom = await room.update(req.body);
      return res.status(200).send(updatedRoom);
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
  static async deleteRoom(req, res) {
    try {
      const room = await Room.findByPk(req.params.roomId);
      if (!room) {
        return res.status(404).json({
          message: "Room not found",
        });
      }
      await room.destroy();
      return res.status(200).json({
        message: "Room deleted",
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
}

module.exports = AdminRoomController;