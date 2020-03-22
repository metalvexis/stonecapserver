import BasicController from 'controller/BasicController.js'

import { DbModels } from 'db/'

export class ResearchProjectController extends BasicController {
  constructor () {
    super('ResearchProject')
  }

  all () {
    return DbModels.ResearchProject.findAll({ include: { all: true } })
  }

  async createProject ({ studentIds, title, abstract }) {
    if (!studentIds || !title || !abstract) throw new Error('INVALID_PROJECT')

    const newProject = await DbModels.ResearchProject.create({
      title,
      abstract,
      status: 'IP',
      approval: false,
      publication: false
    })

    const proponentsList = studentIds.map(StudentId => {
      return {
        ResearchProjectId: newProject.id,
        StudentId,
        dateProposed: new Date()
      }
    })

    await DbModels.Proponent.bulkCreate(proponentsList)

    return newProject
  }

  async createAppointment ({ ResearchProjectId, ConsultationScheduleId, concern }) {
    if (!ResearchProjectId || !ConsultationScheduleId || !concern) throw new Error('INVALID_APPOINTMENT')

    const newAppointment = await DbModels.Appointment.create({
      ResearchProjectId, ConsultationScheduleId, concern
    })

    return newAppointment
  }

  async setProponent ({ ResearchProjectId, StudentIds }) {
    if (!StudentIds.length) throw new Error('STUDENT_REQUIRED')

    const query = {
      where: {
        ResearchProjectId
      }
    }
    const existingProponents = await DbModels.Proponent.findAll(query)

    console.log({Before: existingProponents})
    if (existingProponents) DbModels.Proponent.destroy(query)
    console.log({After: existingProponents})

    const tasks = StudentIds.map(async (StudentId) => {
      return DbModels.Proponent.create({
        ResearchProjectId,
        StudentId,
        dateProposed: new Date()
      })
    })

    return Promise.all(tasks)
  }
}
