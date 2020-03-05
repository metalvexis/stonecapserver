import BasicController from 'controller/BasicController.js'

import { DbModels } from 'db/'

export class FacultyController extends BasicController {
  constructor () {
    super('Faculty')
  }

  async setCoordinator ({ FacultyId }) {
    const faculty = await DbModels.Faculty.findByPk(FacultyId)

    if (!faculty) {
      throw new Error('FACULTY_NOT_FOUND')
    }

    const createCoordinator = await DbModels.Coordinator.create({
      FacultyId
    })
    return createCoordinator
  }

  async setPanelist ({ FacultyId, ResearchProjectId }) {
    const faculty = await DbModels.Faculty.findByPk(FacultyId)
    const research = await DbModels.ResearchProject.findByPk(ResearchProjectId)

    if (!faculty) {
      throw new Error('FACULTY_NOT_FOUND')
    }

    if (!research) {
      throw new Error('RESEARCH_NOT_FOUND')
    }

    const createPanelist = await DbModels.Panelist.create({
      FacultyId,
      ResearchProjectId
    })
    return createPanelist
  }

  async setAdviser ({ FacultyId, ResearchProjectId }) {
    const faculty = await DbModels.Faculty.findByPk(FacultyId)
    const research = await DbModels.ResearchProject.findByPk(ResearchProjectId)

    if (!faculty) {
      throw new Error('FACULTY_NOT_FOUND')
    }

    if (!research) {
      throw new Error('RESEARCH_NOT_FOUND')
    }

    const createAdviser = await DbModels.Adviser.create({
      FacultyId,
      ResearchProjectId
    })
    return createAdviser
  }
}