import BasicController from 'controller/BasicController.js'

import { Password } from 'helper/Password.js'

import { DbModels } from 'db/'

import { Email } from 'helper/Email.js'

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

    const { fName, mName, lName, email, contact, gender, studentRefId } = enrollee

    let existingEnrollee = await DbModels.Student.findOne({
      where: {
        email: enrollee.email
      },
      raw: true
    })

    if (!existingEnrollee) {
      existingEnrollee = await DbModels.Student.create({
        fName,
        mName,
        lName,
        email,
        contact,
        gender,
        dept: 'CS',
        course: 'BSIT',
        password: await Password.genPw('NewPass123'),
        studentRefId
      })

      const mail = Email.createMessage({
        to: email,
        subject: 'User Registration',
        text: 'You can now login to the system using your email and your password is NewPass123'
      })

      await mail.send()
    }

    const isEnrolled = await DbModels.Enrollment.findOne({
      where: {
        ResearchSectionId: section.id,
        StudentId: existingEnrollee.id
      },
      raw: true
    })

    if (!isEnrolled) {
      DbModels.Enrollment.create({
        ResearchSectionId: section.id,
        StudentId: existingEnrollee.id,
        dateEnrolled: new Date()
      })
    }

    const existingSection = await DbModels.ResearchSection.findOne({
      where: {
        id: {
          [DbModels.Sequelize.Op.ne]: section.id
        }
      },
      include: [
        {
          model: DbModels.Student,
          where: {
            id: existingEnrollee.id
          }
        }
      ]
    })

    if (existingSection) {
      await DbModels.Enrollment.destroy({
        where: {
          ResearchSectionId: existingSection.id,
          StudentId: existingEnrollee.id
        }
      })
    }

    return section
  }

  async getEnrollees ({ ResearchSectionId }) {
    const section = await DbModels.ResearchSection.findByPk(ResearchSectionId, { include:[DbModels.Student] })

    return section.Students || []
  }
}
