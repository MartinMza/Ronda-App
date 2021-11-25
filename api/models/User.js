const S = require("sequelize");
const sequelize = require("../config/db");
const bcrypt = require("bcrypt");

class User extends S.Model {
    hash(password, salt) {
        return bcrypt.hash(password, salt);
    }
}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    role: {
      type: S.STRING,
      allowNull: false,
      defaultValue: "user",
      allowedValues: ["user", "admin", "superadmin"],
    },
    phone: {
      type: S.INTEGER,
    },
    company: {
      type: S.STRING,
    },
    credits: {
      type: S.INTEGER,
      defaultValue: 0,
    },
    picture: {
      type: S.STRING,
      //template profile pic 50x50
      defaultValue: "https://i.dlpng.com/static/png/6720667_preview.png",
    },
    salt: {
        type: S.STRING,
    }
  },
  {
    hooks: {
      beforeCreate: (user) => {
        return bcrypt
          .genSalt(12)
          .then((newSalt) => {
            user.salt = newSalt;
            return user.hash(user.password, user.salt);
          })
          .then((hash) => {
            user.password = hash;
          });
      },
    },
    sequelize: sequelize,
    modelName: "user",
  }
);

module.exports = User;