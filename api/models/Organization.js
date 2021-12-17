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
    creationDate: {
        type: S.STRING,
    },
    social_reason: {
        type: S.STRING,
        allowNull: false,
    },
    facturationDay: {
        type: S.STRING
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
    },
    

},{hooks:{
    beforeCreate: (organization) => {
        organization.creationDate = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
        organization.facturationDay = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
    }
},sequelize, modelName: "organization"});
    
module.exports = Organization;