import BasicController from 'controller/BasicController.js'

import moment from 'moment'

import { DbModels } from 'db/'

export class ConsultationScheduleController extends BasicController {
  constructor () {
    super('ConsultationSchedule')
  }

  all () {
    return DbModels.ConsultationSchedule.findAll({ include: { all: true } })
  }

  async createSchedule ({ FacultyId, dateTime, venue, recurring }) {

    if (!FacultyId || !dateTime || !venue) throw new Error('INVALID_SCHED')

    let newSched = null

    newSched = await DbModels.ConsultationSchedule.create({ FacultyId, dateTime, venue, status: 'Active' })

    return newSched
  }
}
