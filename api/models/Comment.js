const S = require("sequelize");
const sequelize = require("../config/db");

class Comment extends S.Model {}

Comment.init({
    comment: {
        type: S.TEXT,
        allowNull: false,
    },
},{
    hooks: {},
    sequelize,
    modelName: "comment",
})

module.exports = Comment;