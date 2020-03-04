'use strict';

const _ = require('lodash')
const Password = require('../../.dist/helper/Password.js')

const faker = require('faker')
faker.seed(0)

const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Periods', [{
      semester: 'summer',
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
          password: await Password.genPw('test'),
          createdAt: new Date(),
          updatedAt: new Date()
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
          createdAt: new Date(),
          updatedAt: new Date()
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
          published: false,
          tags: '',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })

    await queryInterface.bulkInsert('ResearchProjects', researchList)

    let coordinatorList = await models.Faculty.findAll({ limit: 4, order: queryInterface.sequelize.random() })

    coordinatorList = coordinatorList.map(
      function (model) {
        const Faculty = model.get()

        return {
          status: '',
          dateAssigned: new Date(),
          FacultyId: Faculty.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      }
    )

    await queryInterface.bulkInsert('Coordinators', coordinatorList)

    coordinatorList = await models.Coordinator.findAll({ limit: 4, order: queryInterface.sequelize.random() })

    const researchSectionList = coordinatorList.map(function (model) {
      return {
        CoordinatorId: model.get('id'),
        PeriodId: period.id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    await queryInterface.bulkInsert('ResearchSections', researchSectionList)

    const milestoneList = _.range(10).map(
      function () {
        return {
          title: faker.lorem.sentence(),
          description: faker.lorem.sentences(),
          category: faker.lorem.word(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })

    await queryInterface.bulkInsert('MilestoneChecklists', milestoneList)

    const criteriaList = _.range(10).map(
      function () {
        return {
          title: faker.lorem.sentence(),
          description: faker.lorem.sentences(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })

    await queryInterface.bulkInsert('Criteria', criteriaList)

    let deanList = _.range(10).map(
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
          password: await Password.genPw('test'),
          dateAssigned: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      }
    )

    deanList = await Promise.all(deanList)

    await queryInterface.bulkInsert('Deans', deanList)

    const consultSchedList = []

    facultyList = await models.Faculty.findAll({ raw: true, limit: 6, order: queryInterface.sequelize.col('createdAt') })

    // create 3 schedule for each faculty
    facultyList.forEach(
      function (faculty) {
        _.range(3).map(
          function () {
            // startTime between 8AM to 4PM
            const startTime = faker.random.number({ min: 8, max: 16 })

            consultSchedList.push({
              FacultyId: faculty.id,
              date: new Date(),
              startTime,
              endTime: startTime + 1,
              room: 'JH24',
              status: 'Active'
            })
          }
        )
      })

    await queryInterface.bulkInsert('ConsultationSchedules', consultSchedList)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Periods', null, {})

    await queryInterface.bulkDelete('Faculties', null, {})

    await queryInterface.bulkDelete('Students', null, {})

    await queryInterface.bulkDelete('ResearchProjects', null, {})

    await queryInterface.bulkDelete('Coordinators', null, {})

    await queryInterface.bulkDelete('ResearchSections', null, {})

    await queryInterface.bulkDelete('MilestoneChecklists', null, {})

    await queryInterface.bulkDelete('Criteria', null, {})

    await queryInterface.bulkDelete('Deans', null, {})

    await queryInterface.bulkDelete('ConsultationSchedules', null, {})
    
  }
};
