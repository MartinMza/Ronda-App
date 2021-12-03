const {
  Reservation,
  Turno,
  Room,
  User,
  Organization,
  Campus,
} = require("../models");

class ReservationController {
  //---------------------------------------------GET ROUTES--------------------------------------------
  static async getAll(req, res) {
    try {
      const reservations = await Reservation.findAll();
      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getByRoom(req, res) {
    try {
      const reservations = await Reservation.findAll({
        where: {
          roomId: req.params.roomId,
        },
      });
      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getByCurrentUser(req, res) {
    try {
      const reservations = await Reservation.findAll({
        where: {
          userId: req.user.id,
        },
      });
      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getByUserId(req, res) {
    try {
      const reservations = await Reservation.findAll({
        where: {
          userId: req.params.userId,
        },
      });
      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getTurnosFiltrados(req, res) {
    try {
      const campus = await Campus.findOne({
        where: {
          name: req.params.campusName,
        },
      });
      const rooms = await Room.findOne({
        where: {
          campusId: campus.dataValues.id,
          id: req.params.id,
        },
      });
      const turnos = await Turno.findAll({
        where: {
          roomId: rooms.dataValues.id,
          avaliable: true,
        },
      });
      res.status(200).json(turnos);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async turno(req, res) {
    try {
      const room = await Room.findOne({
        where: {
          id: req.params.roomId,
        },
      });
      const turno = await Turno.findOne({
        where: {
          day: req.params.day,
          time: req.params.time,
          roomId: room.dataValues.id,
        },
      });
      res.status(200).json(turno);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //---------------------------------------------POST ROUTES--------------------------------------------

  static async reserve(req, res) {
    try {
      const turn = await Turno.findOne({
        where: {
          id: req.params.turnId,
        },
      });
      const room = await Room.findOne({
        where: {
          id: turn.roomId,
        },
      });
      const organization = await Organization.findOne({
        where: {
          id: req.user.organizationId,
        },
      });
      if (organization.avaliable_credits >= room.credit_value) {
        const reservation = await Reservation.create({
          userId: req.user.id,
          turnId: req.params.turnId,
          roomId: room.id,
        });
        await organization.update({
          avaliable_credits: organization.avaliable_credits - room.credit_value,
        });
        await turn.update({
          avaliable: false,
        });
        res.status(201).json(reservation);
      } else {
        res.status(400).json({ message: "No tienes suficientes créditos" });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  //---------------------------------------------DELETE ROUTES----------------------------------------

  static async cancel(req, res) {
    try {
      const reservation = await Reservation.findOne({
        where: {
          id: req.params.reservationId,
        },
      });
      console.log(reservation);
      const turn = await Turno.findOne({
        where: {
          id: reservation.turnId,
        },
      });
      console.log(turn);
      const room = await Room.findOne({
        where: {
          id: reservation.roomId,
        },
      });
      console.log(room);
      const organization = await Organization.findOne({
        where: {
          id: req.user.organizationId,
        },
      });
      console.log(organization);
      await organization.update({
        avaliable_credits: organization.avaliable_credits + room.credit_value,
      });
      await turn.update({
        avaliable: true,
      });
      await reservation.destroy();
      res.status(200).json(reservation);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ReservationController;
