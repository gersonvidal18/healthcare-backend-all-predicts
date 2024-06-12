const { DataTypes } = require('sequelize');
const sequelize2 = require('../db/db2'); // Asegúrate de que esta sea la instancia correcta de Sequelize

const Medico = sequelize2.define('Medico', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especialidadId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  clinicaId: {
    type: DataTypes.INTEGER,
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
Medico.associate = (models) => {
  Medico.belongsTo(models.Especialidad, { foreignKey: 'especialidadId' });
  Medico.belongsTo(models.Clinica, { foreignKey: 'clinicaId' });
};

module.exports = Medico;
