import { DbModels } from 'db/'

import BasicController from 'controller/BasicController.js'

export class CoordinatorController extends BasicController {
  constructor () {
    super('Coordinator')
  }

  async getAll () {
    const coordinators = await this.model.findAll({ include:[DbModels.Faculty] })
    return coordinators
  }
}
