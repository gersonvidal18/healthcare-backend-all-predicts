// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const User = sequelize.define('User', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER
    },
    foto: { // Campo para almacenar la URL de la imagen
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = User;
