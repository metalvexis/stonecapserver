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
        type: Sequelize.NUMERIC(4, 2),
        defaultValue: 1
      },
      sequence: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Criteria');
  }
};
