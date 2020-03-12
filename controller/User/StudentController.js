import BasicController from 'controller/BasicController.js'

import { DbModels } from 'db/'

export class StudentController extends BasicController {
  constructor () {
    super('Student')
  }

  all () {
    return DbModels.Student.findAll({ include: { all: true } })
  }
}
