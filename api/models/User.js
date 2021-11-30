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
      type: S.STRING,
      defaultValue: "Not Specified",
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
    },
    profession: {
      type: S.STRING,
      defaultValue: "Not Specified",
    },
    googleId: {
      type: S.STRING
    },
    confirmed: {
      type: S.BOOLEAN,
      defaultValue: false,
    }
  },
  {
    hooks: {
      beforeValidate: (user) => {
        if(user.googleId){
            user.password = "123456"; //password is not required for google users
        }
    },
      beforeCreate: (user) => {
        //admins or superAdmins cant be created
        if (user.role === "admin" || user.role === "superadmin") {
          throw new Error("You cant create an admin or superadmin");
        }
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
      beforeUpdate: (user) => {
        //rehash the password if it has changed
        if(user.changed('password')){
            return bcrypt
              .genSalt(12)
              .then((newSalt) => {
                user.salt = newSalt;
                return user.hash(user.password, user.salt)
              })
              .then((hash) => {
                user.password = hash;
              });
        }
    },
    },
    sequelize: sequelize,
    modelName: "user",
  }
);

module.exports = User;
