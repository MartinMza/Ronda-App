const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE, { 
    adapter: 'sequelize',
    logging: false,
    dialect: 'postgres',
    url: process.env.DATABASE,
    dialectOptions: {
        ssl: true,
    }
});

module.exports = db;