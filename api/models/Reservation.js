const S = require("sequelize");
const sequelize = require("../config/db");

class Reservation extends S.Model {}

Reservation.init({
},{sequelize, modelName: "reservation"});

module.exports = Reservation;