// models/diagnostico.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Diagnostico = sequelize.define('Diagnostico', {
    idDiagnostico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    predictIA: {
        type: DataTypes.STRING(30), // Cambiado a VARCHAR(30)
        allowNull: false,
    },
    resultPac: {
        type: DataTypes.BOOLEAN, // Cambiado a BOOLEAN
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
});

module.exports = Diagnostico;
