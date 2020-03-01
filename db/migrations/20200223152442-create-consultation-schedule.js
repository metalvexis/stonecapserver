'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ConsultationSchedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: Sequelize.DATE,
      startTime: Sequelize.INTEGER, // 0 - 23
      endTime: Sequelize.INTEGER, // 0 - 23
      room: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ConsultationSchedules');
  }
};