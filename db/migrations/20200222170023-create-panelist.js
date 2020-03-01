'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Panelists', {
      FacultyId: {
        type: Sequelize.INTEGER
      },
      ResearchProjectId: {
        type: Sequelize.INTEGER
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