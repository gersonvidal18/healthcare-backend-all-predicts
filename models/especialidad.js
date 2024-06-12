const { DataTypes } = require('sequelize');
const sequelize2 = require('../db/db2');

const Especialidad = sequelize2.define('Especialidad', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Especialidad;
