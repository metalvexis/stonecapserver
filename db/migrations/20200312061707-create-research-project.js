'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ResearchProjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DeanId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      },
      abstract: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
      },
      approval: {
        type: Sequelize.BOOLEAN
      },
      publication: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ResearchProjects');
  }
};
