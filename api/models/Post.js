const S = require("sequelize");
const sequelize = require("../config/db");

class Post extends S.Model {}

Post.init({
    content: {
        type: S.TEXT,
        allowNull: false,
    },
    campus: {
        type: S.STRING,
        defaultValue: "general",
        allowedValues: ["general", "recoleta", "belgrano"],
    },
},{
    hooks: {},
    sequelize,
    modelName: "post",
})

module.exports = Post;