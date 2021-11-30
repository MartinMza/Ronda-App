const User = require("./User");
const Post = require("./Post");
const Like = require("./Like");
const Room = require("./Room");
const Comment = require("./Comment");
const Message = require("./Message");
const Skill = require("./Skill");
const Organization = require("./Organization");
const Membership = require("./Membership");

//User relations
User.hasMany(Post);
User.hasMany(Like);
User.hasMany(Comment);
User.hasMany(Skill);
//Post relations
Post.hasMany(Like);
Post.hasMany(Comment);
//Organization/Membership relations
Organization.hasMany(User);

Organization.belongsToMany(Membership, {
  through: "organization_membership",

});

Membership.belongsToMany(Organization, {
  through: "organization_membership",
});

// Membership.belongsToMany(Organization, {through: "organization_membership"});

// Membership.hasMany(Organization, {as:"membresia"})

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
};
