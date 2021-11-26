const { Room } = require("../models");

class RoomController {
  //ADMIN METHODS--------------------------------------
  static async createRoom(req, res) {
    try {
      const room = await Room.create({
        type: req.body.type,
        campus: req.body.campus,
        creditValue: req.body.creditValue,
      });
      return res.status(201).send(room);
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
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

  //PUBLIC METHODS--------------------------------------
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
