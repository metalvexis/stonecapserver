import BasicController from 'controller/BasicController.js'

import { DbModels } from 'db/'

export class DefenseScheduleController extends BasicController {
  constructor () {
    super('DefenseSchedules')
  }

  all () {
    return DbModels.DefenseSchedule.findAll({ include: { all: true } })
  }

  createDefenseSchedule ({ ResearchProjectId, PanelistIds = [], dateTime, venue, category } = {}) {
    // Search matching category from DefenseTypes

    // Insert DefenseSchedules entry

    // Send emails to Panel

  }
}
