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
      email: 'bustineraemil@gmail.com',
      dept: 'CS',
      course: 'BSIT',
      password: await Password.genPw('NewPass123'),
      studentRefId: faker.random.number({
        min: 1000,
        max: 10000
      })
    }

    const studentAcct2 = {
      fName: "James",
      mName: faker.name.lastName(),
      lName: "Saballegue",
      address: "Pacol",
      gender: "M",
      bday: new Date('1994-03-30'),
      contact: faker.phone.phoneNumber(),
      email: "jp.saballegue@gmail.com",
      dept: 'CS',
      course: 'BSIT',
      password: await Password.genPw('NewPass123'),
      studentRefId: faker.random.number({
        min: 1000,
        max: 10000
      })
    }

    const studentAcct3 = {
      fName: "Mark",
      mName: faker.name.lastName(),
      lName: "Rustia",
      address: "Pacol",
      gender: "M",
      bday: new Date('1994-03-30'),
      contact: faker.phone.phoneNumber(),
      email: "markRustia@gmail.com",
      dept: 'CS',
      course: 'BSIT',
      password: await Password.genPw('NewPass123'),
      studentRefId: faker.random.number({
        min: 1000,
        max: 10000
      })
    }

    const facultyAcct1 = {
      fName: "Marvs",
      mName: "M",
      lName: "Monteagudo",
      address: "Naga",
      gender: "M",
      bday: new Date('1994-03-30'),
      contact: faker.phone.phoneNumber(),
      email: "metalvackal@gmail.com",
      dept: 'CS',
      status: 'Active',
      educBg: 'College',
      password: await Password.genPw('test')
    }

    return Promise.all([
      await queryInterface.bulkInsert('Students', [studentAcct1, studentAcct2, studentAcct3]),
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
