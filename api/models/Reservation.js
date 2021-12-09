const S = require("sequelize");
const sequelize = require("../config/db");

class Reservation extends S.Model {}

Reservation.init({
    eventId: {
        type: S.STRING,
        allowNull: false,
    },
    calendarId: {
        type: S.STRING,
        allowNull: false,
    },
    location: {
        type: S.STRING,
        allowNull: false,
    },
    start: {
        type: S.STRING,
    },
    end:{
        type: S.STRING,
    }
    
},{sequelize, modelName: "reservation"});

module.exports = Reservation;