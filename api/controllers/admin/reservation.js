const {User, Turno, Room, Reservation, Organization} = require('../../models');

class AdminReservationController {
    static async cancel(req, res) {
        try {
          const user = await User.findOne({
            where: {
                id: req.params.userId
            }
          })
          const reservation = await Reservation.findOne({
            where: {
              id: req.params.reservationId,
            },
          });
          const turn = await Turno.findOne({
            where: {
              id: reservation.turnId,
            },
          });
          const room = await Room.findOne({
            where: {
              id: reservation.roomId,
            },
          });
    
          const organization = await Organization.findOne({
            where: {
              id: user.organizationId,
            },
          });
    
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

module.exports = AdminReservationController;