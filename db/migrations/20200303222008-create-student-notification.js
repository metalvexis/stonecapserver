'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentNotifications', {
      StudentId: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NotificationId: {
        primaryKey: true,
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StudentNotifications');
  }
};