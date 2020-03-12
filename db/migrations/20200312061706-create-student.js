'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      fName: {
        type: Sequelize.STRING
      },
      mName: {
        type: Sequelize.STRING
      },
      lName: {
        type: Sequelize.STRING
      },
      dept: {
        type: Sequelize.STRING
      },
      course: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      contact: {
        type: Sequelize.STRING
      },
      bday: {
        type: Sequelize.DATE
      },
      password: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};
