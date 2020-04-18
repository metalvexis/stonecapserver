'use strict';

const _ = require('lodash')

const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const faculty = await models.Faculty.findOne({
      where: {
        email: 'metalvackal@gmail.com',
      }
    })

    const students = await models.Student.findAll()

    const sections = await models.ResearchSection.findAll()

    const coordinators = []

    const enrollments = []

    sections.forEach(section => {
      const ResearchSectionId = section.id
      coordinators.push({
        FacultyId: faculty.id,
        ResearchSectionId
      })

      students.forEach(student => {
        enrollments.push({
          StudentId: student.id,
          ResearchSectionId
        })
      })
    })

    console.log(`Assigning: ${faculty.email} as Coordinator for: `)

    console.log({ coordinators, sections })

    return Promise.all([
      await queryInterface.bulkInsert('Coordinators', coordinators),
      await queryInterface.bulkInsert('Enrollments', enrollments)
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.bulkDelete('Coordinators', null, {}),
      await queryInterface.bulkDelete('Enrollments', null, {})
    ])
  }
};
