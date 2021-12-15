const S = require("sequelize");
const sequelize = require("../config/db");

class Message extends S.Model {}

Message.init({
    message: {
        type: S.TEXT,
        allowNull: false,
    },
    senderId: {
        type: S.INTEGER,
        allowNull:false
    },
    receiverId: {
        type: S.INTEGER,
        allowNull:false,
    },
    userEmail:{
        type: S.TEXT,
        allowNull:false,
    }
},{
    hooks: {},
    sequelize,
    modelName: "message",
})

module.exports = Message;