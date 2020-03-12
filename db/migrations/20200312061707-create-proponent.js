'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Proponents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ResearchProjectId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      StudentId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      dateProposed: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Proponents');
  }
};
