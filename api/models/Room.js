const S = require("sequelize");
const sequelize = require("../config/db");

class Room extends S.Model {}

Room.init({
    name:{
        type: S.STRING,
        allowNull: false,
    },
    description: {
        type: S.TEXT,
        allowNull: false,
    },
    type: {
        type: S.INTEGER,
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
    photo:{
        type: S.TEXT,
    }
    // here should be a foreign key to the reservation dates
    

}, {hooks:{}, sequelize, modelName: "room" });

module.exports = Room;