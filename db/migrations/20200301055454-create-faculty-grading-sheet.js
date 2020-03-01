'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FacultyGradingSheets', {
      FacultyId: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      GradingSheetId: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.DECIMAL(2, 2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FacultyGradingSheets');
  }
};