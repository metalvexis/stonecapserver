'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enrollments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ResearchSectionId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      StudentId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dateEnrolled: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Enrollments');
  }
};
