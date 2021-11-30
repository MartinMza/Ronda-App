const AuthController = require("./auth");
const PostController = require("./post");
const LikeController = require("./like");
const CommentController = require("./comment");
const AdminController = require("./admin");
const RoomController = require("./room");
const MessageController = require("./message");
const UserController = require("./user");
const OrganizationController = require("./organization");
const MembershipController = require("./membership");

module.exports = {
  AuthController,
  OrganizationController,
  MembershipController,
  PostController,
  LikeController,
  CommentController,
  AdminController,
  RoomController,
  MessageController,
  UserController,
};
