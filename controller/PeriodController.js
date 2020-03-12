import BasicController from 'controller/BasicController.js'

import { DbModels } from 'db/'

export class PeriodController extends BasicController {
  constructor () {
    super('Period')
  }

  async createPeriod ({ schoolYear, semester }) {
    if (!schoolYear || !semester) {
      throw new Error('INVALID_PERIOD')
    }
    const newPeriod = await DbModels.Period.create({ schoolYear, semester })
    return newPeriod
  }
}
