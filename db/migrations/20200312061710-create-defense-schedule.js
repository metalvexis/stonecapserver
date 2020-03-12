'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DefenseSchedules', {
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
      DefenseTypeId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dateTime: {
        type: Sequelize.DATE
      },
      venue: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DefenseSchedules');
  }
};
