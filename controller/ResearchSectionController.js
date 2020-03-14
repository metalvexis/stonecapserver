import BasicController from 'controller/BasicController.js'

import { Password } from 'helper/Password.js'

import { DbModels } from 'db/'

export class ResearchSectionController extends BasicController {
  constructor () {
    super('ResearchSection')
  }

  all () {
    return DbModels.ResearchSection.findAll({ include: { all: true } })
  }

  async createSection ({ name, FacultyId, PeriodId }) {
    const faculty = await DbModels.Faculty.findByPk(FacultyId)

    if (!faculty) {
      return false
    }

    const newSection = await DbModels.ResearchSection.create({ name, PeriodId })

    await DbModels.Coordinator.create({
      FacultyId: faculty.id,
      ResearchSectionId: newSection.id,
      dateAssigned: new Date()
    })
    return newSection
  }

  async addEnrollee ({ ResearchSectionId, enrollee }) {
    const section = await DbModels.ResearchSection.findByPk(ResearchSectionId, { include:[DbModels.Student] })

    if (!section) {
      return false
    }

    const { fName, mName, lName, email, contact, gender } = enrollee

    let newEnrollee = await DbModels.Student.findAll({
      where: {
        email: enrollee.email
      }
    })

    if (!newEnrollee.length) {
      newEnrollee = await DbModels.Student.create({
        fName,
        mName,
        lName,
        email,
        contact,
        gender,
        dept: 'CS',
        course: 'BSIT',
        password: await Password.genPw('NewPass123')
      })
    }

    DbModels.Enrollment.create({
      ResearchSectionId: section.id,
      StudentId: newEnrollee.id,
      dateEnrolled: new Date()
    })

    return section
  }

  async getEnrollees ({ ResearchSectionId }) {
    const section = await DbModels.ResearchSection.findByPk(ResearchSectionId, { include:[DbModels.Student] })

    return section.Students || []
  }
}
