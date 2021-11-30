const S = require("sequelize");
const sequelize = require("../config/db");

class Organization extends S.Model {}

Organization.init({
    name: {
        type: S.STRING,
        allowNull: false,
    },
    CUIT: {
        type: S.STRING,
        allowNull: false,
    },
    date_time_fc: {
        type: S.DATE,
    },
    social_reason: {
        type: S.STRING,
        allowNull: false,
    },
    day_fc: {
        type: S.DATEONLY,
    },
    phone: {
        type: S.STRING,
    },
    type: {
        type: S.STRING,
        allowedValues: ["Empresa", "Particular"],
    },
    avaliable_credits: {
        type: S.INTEGER,
        defaultValue: 0,
    }
},{sequelize, modelName: "organization"});
    
module.exports = Organization;