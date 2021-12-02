const S = require("sequelize");
const sequelize = require("../config/db");

class Reservation extends S.Model {}

Reservation.init({
    turnId: {
        type: S.INTEGER,
        allowNull: false,
        foreingKey: true,
        references: {
            model: "turnos",
            key: "id"
        }
    }
},{sequelize, modelName: "reservation"});

module.exports = Reservation;