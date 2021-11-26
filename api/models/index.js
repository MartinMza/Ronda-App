const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');
const Room = require('./Room');
const Comment = require('./Comment');
const Message = require('./Message');
const Skill = require('./Skill');

//User relations
User.hasMany(Post)
User.hasMany(Like)
User.hasMany(Comment)
User.hasMany(Skill)
//Post relations
Post.hasMany(Like)
Post.hasMany(Comment)






module.exports = {User, Post, Like, Room, Comment, Message, Skill};