const AuthController = require("./auth");
const PostController = require("./post");
const LikeController = require("./like");
const CommentController = require("./comment");
const RoomController = require("./room");
const MessageController = require("./message");
const UserController = require("./user");
const OrganizationController = require("./organization");
const ReservationController = require("./reservation");

module.exports = {
  AuthController,
  OrganizationController,
  PostController,
  LikeController,
  CommentController,
  RoomController,
  MessageController,
  UserController,
  ReservationController
};
