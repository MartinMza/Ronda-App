const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE, null, null, {
    dialect: 'postgres',
    host: 'localhost',
    logging: false
})

module.exports = db;