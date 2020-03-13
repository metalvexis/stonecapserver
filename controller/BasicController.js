import { DbModels } from 'db/'

/*
  Creates boilerplate controller for a Sequelize Model

  e.g.
  This snippet:

  const StudentsController = new Basic(User);

  will create a StudentsController with ff functionalities

  getAll()              : Get all entries of Model
  getOne(id)            : Get specific entry of Model
  createOne(data)       : Insert one entry of Model
  updateOne(id, data)   : Update one entry of Model
  deleteOne(id)         : Remove one entry of Model
*/

export default class BasicController {
  constructor (model) {
    this.model = DbModels[model]
  }

  async getAll () {
    // const all = await this.model.findAll({ include: { all: true }})
    const all = await this.model.findAll()
    return all
  }

  async getOne (id) {
    const one = await this.model.findByPk(id, { include: { all: true } })
    return one
  }

  async createOne (data) {
    const createOne = await this.model.create(data)
    return createOne
  }

  async updateOne (id, updateData) {
    const updateOne = await this.model.update(updateData, { where: { id }, validate: true })
    return updateOne
  }

  async deleteOne (id) {
    const instance = await this.model.findByPk(id)

    await instance.destroy()

    return true
  }
}
