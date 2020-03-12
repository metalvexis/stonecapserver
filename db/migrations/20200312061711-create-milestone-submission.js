'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MilestoneSubmissions', {
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
      MilestoneChecklistId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dateSubmitted: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MilestoneSubmissions');
  }
};
