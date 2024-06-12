'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Especialidads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Agregar la relación belongsToMany
    await queryInterface.createTable('EspecialidadEnfermedad', {
      especialidadId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Especialidads',
          key: 'id'
        }
      },
      enfermedadId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Enfermedads',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    // Eliminar la relación belongsToMany
    await queryInterface.dropTable('EspecialidadEnfermedad');

    await queryInterface.dropTable('Especialidades');
  }
};
