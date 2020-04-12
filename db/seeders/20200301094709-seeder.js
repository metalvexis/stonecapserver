'use strict';

const _ = require('lodash')
const Password = require('../../.dist/helper/Password.js')

const faker = require('faker')
faker.seed(0)

const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Periods', [{
      semester: '2',
      schoolYear: '2019'
    }])

    let period = await models.Period.findOne()
    period = period.get()

    let facultyList = _.range(10).map(
      async function () {
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
          password: await Password.genPw('test')
        }
      }
    )

    facultyList = await Promise.all(facultyList)

    await queryInterface.bulkInsert('Faculties', facultyList)


    let studentList = _.range(24).map(
      async function () {
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
          password: await Password.genPw('test'),
          studentRefId: faker.random.number({
            min: 1000,
            max: 10000
          })
        }
      }
    )

    studentList = await Promise.all(studentList)

    await queryInterface.bulkInsert('Students', studentList)

    let researchList = _.range(12).map(
      function () {
        return {
          title: faker.lorem.sentence(),
          abstract: faker.lorem.sentences(),
          status: 'IP',
          publication: false
        }
      })

    await queryInterface.bulkInsert('ResearchProjects', researchList)

    const milestoneList = _.range(10).map(
      function () {
        return {
          title: faker.lorem.sentence(),
          description: faker.lorem.sentences(),
          category: faker.lorem.word()
        }
      })

    await queryInterface.bulkInsert('MilestoneChecklists', milestoneList)

    const criteriaList = _.range(10).map(
      function () {
        return {
          title: faker.lorem.word(),
          description: faker.lorem.sentences(),
          percentage: 1,
          sequence: 1
        }
      })

    await queryInterface.bulkInsert('Criteria', criteriaList)

    const consultSchedList = []

    facultyList = await models.Faculty.findAll({ raw: true, limit: 6 })

    // create 3 schedule for each faculty
    facultyList.forEach(
      function (faculty) {
        _.range(3).map(
          function () {
            consultSchedList.push({
              FacultyId: faculty.id,
              dateTime: new Date(),
              venue: 'JH24',
              status: 'Active'
            })
          }
        )
      })

    await queryInterface.bulkInsert('ConsultationSchedules', consultSchedList)

    // TODO seed defense types
    const defenseTypeList = [
      {
        category: 'title'
      },
      {
        category: 'preliminary'
      },
      {
        category: 'final'
      }
    ]
    await queryInterface.bulkInsert('DefenseTypes', defenseTypeList)

    // TODO seed research sections
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Periods', null, {})

    await queryInterface.bulkDelete('Faculties', null, {})

    await queryInterface.bulkDelete('Students', null, {})

    await queryInterface.bulkDelete('ResearchProjects', null, {})

    await queryInterface.bulkDelete('MilestoneChecklists', null, {})

    await queryInterface.bulkDelete('Criteria', null, {})

    await queryInterface.bulkDelete('ConsultationSchedules', null, {})



  }
};
