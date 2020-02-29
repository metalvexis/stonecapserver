'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SectionStudents', {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SectionStudents');
  }
};