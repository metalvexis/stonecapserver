'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MilestoneSubmissions', {
      status: {
        type: Sequelize.STRING
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