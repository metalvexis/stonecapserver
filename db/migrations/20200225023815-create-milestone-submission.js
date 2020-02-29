'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MilestoneSubmissions', {
      MilestoneChecklistId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      ResearchProjectId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      status: {
        type: Sequelize.STRING
      },
      dateAdded: {
        type: Sequelize.DATE
      },
      dateCompleted: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MilestoneSubmissions');
  }
};