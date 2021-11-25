const S = require("sequelize");
const sequelize = require("../config/db");

class Skill extends S.Model {}

Skill.init({
    skill: {
        type: S.STRING,
        allowNull: false
    },
    level: {
        type: S.STRING,
        allowNull: false,
        allowedValues: ["beginner", "intermediate", "advanced"],
    },
    
}, { sequelize, modelName: "skill" });

module.exports = Skill;