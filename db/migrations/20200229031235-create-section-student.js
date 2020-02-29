'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SectionStudents', {
      StudentId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      ResearchSectionId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SectionStudents');
  }
};