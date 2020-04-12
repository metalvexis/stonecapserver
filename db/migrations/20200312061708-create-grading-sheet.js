'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GradingSheets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CriteriaId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      PanelistId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ResearchProjectId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.NUMERIC(4, 2)
      },
      decision: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GradingSheets');
  }
};
