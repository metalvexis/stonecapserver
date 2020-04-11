import BasicController from 'controller/BasicController.js'

import { DbModels } from 'db/'

export class CriteriaController extends BasicController {
  constructor () {
    super('Criteria')
  }

  all () {
    return DbModels.Criteria.findAll({ include: { all: true } })
  }
}
