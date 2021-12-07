const User = require("./User");
const Post = require("./Post");
const Like = require("./Like");
const Room = require("./Room");
const Comment = require("./Comment");
const Message = require("./Message");
const Skill = require("./Skill");
const Organization = require("./Organization");
const Membership = require("./Membership");
const Reservation = require("./Reservation");
const Campus = require("./Campus");
const Turno = require("./Turno");


//User relations
User.hasMany(Post);
User.hasMany(Like);
User.hasMany(Comment);
User.hasMany(Skill);
User.hasMany(Reservation);
User.hasMany(Message)
//Post relations
Post.hasMany(Like);
Post.hasMany(Comment);
//Organization/Membership relations
// Organization.hasMany(User);
// Membership.hasMany(Organization);
Organization.belongsToMany(Membership, {
  through: "organization_membership",
});
Membership.belongsToMany(Organization, {
  through: "organization_membership",
});

//Campus relations
Campus.hasMany(User);
Campus.hasMany(Room);
Campus.hasMany(Post);
//Room relations
Room.hasMany(Turno);
Room.hasMany(Reservation);


module.exports = {
  User,
  Post,
  Like,
  Room,
  Comment,
  Message,
  Skill,
  Organization,
  Membership,
  Reservation,
  Campus,
  Turno,
};
