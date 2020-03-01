'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GradingSheets', {
      CriteriaId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      ResearchProjectId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      decision: {
        type: Sequelize.STRING
      },
      percentage: {
        type: Sequelize.INTEGER
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
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GradingSheets');
  }
};