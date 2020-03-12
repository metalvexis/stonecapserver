'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Criteria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      percentage: {
        type: Sequelize.NUMERIC(2, 2)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Criteria');
  }
};
