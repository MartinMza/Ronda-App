const S = require("sequelize");
const sequelize = require("../config/db");

class Room extends S.Model {}

Room.init({
    type: {
        type: S.STRING,
        allowedValues: ["small", "medium", "large"],
        allowNull: false,
    },
    campus: {
        type: S.STRING,
        allowNull: false,
        allowedValues: ["recoleta", "belgrano"],
    },
    creditValue: {
        type: S.INTEGER,
        allowNull: false,
    },
    // here should be a foreign key to the reservation dates
    

}, {hooks:{}, sequelize, modelName: "room" });

module.exports = Room;