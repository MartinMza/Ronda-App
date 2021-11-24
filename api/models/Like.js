const S = require("sequelize");
const sequelize = require("../config/db");

class Like extends S.Model {}

Like.init({}, { sequelize, modelName: "like" });

module.exports = Like;