'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ResearchProjectId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ConsultationScheduleId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      concern: {
        type: Sequelize.TEXT
      },
      prerequisite: {
        type: Sequelize.TEXT
      },
      feedback: {
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Appointments');
  }
};
