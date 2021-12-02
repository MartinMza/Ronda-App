const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE, {logging: false});

module.exports = db;