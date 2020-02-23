'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Deans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      address: {
        type: Sequelize.STRING
      },
      dateAssigned: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      bday: {
        type: Sequelize.DATE
      },
      contact: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      dept: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      educBg: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Deans');
  }
};