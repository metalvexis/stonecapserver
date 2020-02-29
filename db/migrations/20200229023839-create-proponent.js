'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Proponents', {
      StudentId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      ResearchProjectId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Proponents');
  }
};