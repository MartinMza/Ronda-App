const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');

User.hasMany(Post)
User.hasMany(Like)
Post.hasMany(Like)



module.exports = {User, Post, Like};