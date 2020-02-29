'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Panelists', {
      FacultyId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      ResearchProjectId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      status: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Panelists');
  }
};