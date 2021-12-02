const S = require("sequelize");
const sequelize = require("../config/db");

class Turno extends S.Model {}

Turno.init({
    time: {
        type: S.STRING,
    },
    day: {
        type: S.STRING,
    },
    avaliable: {
        type: S.BOOLEAN,
        defaultValue: true,
    },

},{sequelize, modelName: "turno"});
    
module.exports = Turno;