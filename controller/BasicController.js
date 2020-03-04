import { DbModels } from 'db/'

export default class BasicController {
  constructor (model) {
    this.model = DbModels[model]
  }

  async getAll () {
    try {
      return await this.model.findAll()
    } catch (err) {
      global.logger.err(err.stack)
    }
  }

  async getOne (id) {
    try {
      return await this.model.findByPk(id)
    } catch (err) {
      global.logger.err(err.stack)
    }
  }

  async createOne (data) {
    try {
      return await this.model.create(data)
    } catch (err) {
      global.logger.err(err.stack)
    }
  }

  async updateOne (id, updateData) {
    try {
      return await this.model.update(updateData, { where: { id }, validate: true })
    } catch (err) {
      global.logger.err(err.stack)
    }
  }

  async deleteOne (id) {
    try {
      const instance = await this.model.findByPk(id)

      await instance.destroy()

      return true
    } catch (err) {
      global.logger.err(err.stack)
    }
  }
}