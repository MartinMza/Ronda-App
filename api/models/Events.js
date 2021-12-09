const S = require("sequelize");
const sequelize = require("../config/db");

class Events extends S.Model {}

Turno.init({
    location: {
        type: S.STRING,
        allowNull: true,
    },
     
    id:{
        type: S.STRING,
        allowNull: true,
    }

},{sequelize, modelName: "event"});
    
module.exports = Events;