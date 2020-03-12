import BasicController from 'controller/BasicController.js'

import { DbModels } from 'db/'

export class ConsultationScheduleController extends BasicController {
  constructor () {
    super('ConsultationSchedule')
  }

  all () {
    return DbModels.ConsultationSchedule.findAll({ include: { all: true } })
  }

  async createSchedule ({ FacultyId, dateTime, room }) {

    if (!FacultyId || !dateTime || !room) throw new Error('INVALID_SCHED')

    const newSched = await DbModels.ConsultationSchedule.create({ FacultyId, dateTime, room, status: 'Active' })

    return newSched
  }
}
