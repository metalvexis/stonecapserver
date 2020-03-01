'use strict';

const _ = require('lodash')

const faker = require('faker')
faker.seed(0)

const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    await queryInterface.bulkInsert('Periods', [{
      semester: 'summer',
      schoolYear: '2019'
    }])

    const period = await models.Period.findOne()

    const facultyList = _.range(10).map(
      function () {
        return {
          fName: faker.name.firstName(),
          mName: faker.name.lastName(),
          lName: faker.name.lastName(),
          address: faker.address.state(),
          gender: 'F',
          bday: faker.date.between(1990, 1992),
          contact: faker.phone.phoneNumber(),
          email: faker.internet.email(),
          dept: 'CS',
          status: 'Active',
          educBg: 'College',
          password: 'test',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })

    await queryInterface.bulkInsert('Faculties', facultyList)

    const studentList = _.range(24).map(
      function () {
        return {
          fName: faker.name.firstName(),
          mName: faker.name.lastName(),
          lName: faker.name.lastName(),
          address: faker.address.state(),
          gender: 'F',
          bday: faker.date.between(1995, 2000),
          contact: faker.phone.phoneNumber(),
          email: faker.internet.email(),
          dept: 'CS',
          course: 'BSIT',
          password: 'test',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })

    await queryInterface.bulkInsert('Students', studentList)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Periods', null, {})

    await queryInterface.bulkDelete('Faculties', null, {})

    await queryInterface.bulkDelete('Students', null, {})
  }
};
