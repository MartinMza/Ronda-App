const Sequelize = require('sequelize');
const db = new Sequelize("postgres://rondadev:commander!rcw@database-ronda.c8peccsb3tt6.us-east-1.rds.amazonaws.com:5432/ronda", {logging: false});

module.exports = db;