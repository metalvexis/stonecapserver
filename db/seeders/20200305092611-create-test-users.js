'use strict';

const Password = require('../../.dist/helper/Password.js')

const faker = require('faker')
faker.seed(0)

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const studentAcct1 = {
      fName: 'Emil',
      mName: faker.name.lastName(),
      lName: 'Bustinera',
      address: 'Minalabac',
      gender: 'M',
      bday: faker.date.between(1995, 2000),
      contact: faker.phone.phoneNumber(),
      email: 'emil@test.com',
      dept: 'CS',
      course: 'BSIT',
      password: await Password.genPw('#Emil2020')
    }

    const studentAcct2 = {
      fName: "James",
      mName: "Jamila",
      lName: "Saballegue",
      address: "Pacol",
      gender: "M",
      bday: new Date('1994-03-30'),
      contact: faker.phone.phoneNumber(),
      email: "james@test.com",
      dept: 'CS',
      course: 'BSIT',
      password: await Password.genPw('#James1994')
    }

    const facultyAcct1 = {
      fName: "Marvs",
      mName: "Jamila",
      lName: "Monteagudo",
      address: "Naga",
      gender: "M",
      bday: new Date('1994-03-30'),
      contact: faker.phone.phoneNumber(),
      email: "marvs@test.com",
      dept: 'CS',
      status: 'Active',
      educBg: 'College',
      password: await Password.genPw('test')
    }

    return Promise.all([
      await queryInterface.bulkInsert('Students', [studentAcct1, studentAcct2]),
      await queryInterface.bulkInsert('Faculties', [facultyAcct1])
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkDelete('Faculties', null, {}),

      await queryInterface.bulkDelete('Students', null, {})
    ])

  }
};
