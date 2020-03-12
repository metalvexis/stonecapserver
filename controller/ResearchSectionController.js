import BasicController from 'controller/BasicController.js'

import { DbModels } from 'db/'

export class ResearchSectionController extends BasicController {
  constructor () {
    super('ResearchSection')
  }

  async createSection ({ name, FacultyId, PeriodId }) {
    const faculty = await DbModels.Faculty.findByPk(FacultyId)

    if (!faculty) {
      return false
    }

    const newSection = await DbModels.ResearchSection.create({ name, PeriodId })

    await DbModels.Coordinator.create({
      FacultyId: faculty.id,
      ResearchSectionId: newSection.id,
      dateAssigned: new Date()
    })
    return newSection
  }
}
