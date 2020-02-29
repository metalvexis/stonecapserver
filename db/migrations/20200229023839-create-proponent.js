'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Proponents', {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Proponents');
  }
};