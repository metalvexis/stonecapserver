import BasicController from 'controller/BasicController.js'

import { DbModels } from 'db/'

export class StudentController extends BasicController {
  constructor () {
    super('Student')
  }

  all () {
    return DbModels.Student.findAll({ include: { all: true } })
  }

  async getSection ({ StudentId }) {
    const student = await DbModels.Student.findByPk(StudentId, { include: { all: true } })

    if (!student) throw new Error('STUDENT_NOT_FOUND')

    return student.ResearchSections
  }

  async getProject ({ StudentId }) {
    const student = await DbModels.Student.findByPk(StudentId, { include: { all: true } })
    if (!student) return []

    return student.ResearchProjects
  }
}
