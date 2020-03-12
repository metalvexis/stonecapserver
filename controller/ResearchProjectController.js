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
      status: 'Approved',
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
}
