const S = require("sequelize");
const sequelize = require("../config/db");

class Campus extends S.Model {}

Campus.init({
    name: {
       type: S.STRING,
       allowNull: false,
    },
    description: {
        type: S.TEXT,
        allowNull: false,
    },
    photo: {
        type: S.TEXT,
        defaultValue: "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/9/2/8/5/235829-6-eng-GB/Feed-Test-SIC-Feed-20142_news_large.jpg"
    },
    

}, {hooks:{}, sequelize, modelName: "campus" });

module.exports = Campus;