const { DataTypes } = require('sequelize');
const sequelize2 = require('../db/db2'); // Asegúrate de que esta sea la instancia correcta de Sequelize

const Clinica = sequelize2.define('Clinica', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  latitud: {
    type: DataTypes.NUMERIC,
    allowNull: false
  },
  longitud: {
    type: DataTypes.NUMERIC,
    allowNull: false
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

// Definir las asociaciones en otro archivo o en algún lugar después de la definición del modelo
Clinica.associate = (models) => {
  // Define tus asociaciones aquí
  // Por ejemplo, si la Clínica tiene muchos Médicos:
  Clinica.hasMany(models.Medico, { foreignKey: 'clinicaId' });
};

module.exports = Clinica;
