require('dotenv').config({ path: '.env' });

const { Sequelize } = require('sequelize');

const sequelize2 = new Sequelize(process.env.DB2_NAME, process.env.DB2_USER, process.env.DB2_PASSWORD, {
   host: process.env.DB2_HOST,
   port: process.env.DB2_PORT,
   dialect: 'postgres'
});

module.exports = sequelize2;
