'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Coordinators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FacultyId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ResearchSectionId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dateAssigned: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Coordinators');
  }
};
