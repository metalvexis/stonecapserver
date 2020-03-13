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

    const periodExists = DbModels.Period.findOne({
      where: {
        schoolYear, semester
      }
    })

    if (periodExists) throw new Error('PERIOD_EXISTS')

    const newPeriod = await DbModels.Period.create({ schoolYear, semester })
    return newPeriod
  }
}
