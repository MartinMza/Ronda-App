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
    capacity: {
        type: S.INTEGER,
        allowNull: false,
    },
    credit_value: {
        type: S.INTEGER,
        allowNull: false,
    },
    photo:{
        type: S.TEXT,
    }
    // here should be a foreign key to the reservation dates
    

}, {hooks:{}, sequelize, modelName: "room" });

module.exports = Room;