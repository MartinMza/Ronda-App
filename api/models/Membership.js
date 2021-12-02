const S = require("sequelize");
const sequelize = require("../config/db");

class Membership extends S.Model {}

Membership.init({
    name: {
        type: S.STRING,
    },
    credits: {
        type: S.INTEGER,
    },
    location: {
        type: S.STRING,
    },

},{sequelize, modelName: "membership"});
    
module.exports = Membership;