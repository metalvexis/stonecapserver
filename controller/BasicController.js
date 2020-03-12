import { DbModels } from 'db/'

export default class BasicController {
  constructor (model) {
    this.model = DbModels[model]
  }

  async getAll () {
    const all = await this.model.findAll({ include: { all: true }})
    return all
  }

  async getOne (id) {
    const one = await this.model.findByPk(id)
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
