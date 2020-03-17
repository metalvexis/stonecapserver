import BasicController from 'controller/BasicController.js'

import { DbModels } from 'db/'

export class FacultyController extends BasicController {
  constructor () {
    super('Faculty')
  }

  async all () {
    const all = await DbModels.Faculty.findAll({ include: { all: true } })
    return all
  }

  async setCoordinator ({ FacultyId }) {
    const faculty = await DbModels.Faculty.findByPk(FacultyId)

    if (!faculty) {
      throw new Error('FACULTY_NOT_FOUND')
    }

    const createCoordinator = await DbModels.Coordinator.create({
      FacultyId,
      dateAssigned: new Date(),
      status: 'Active'
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
      ResearchProjectId,
      dateAssigned: new Date(),
      status: 'Active'
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
      ResearchProjectId,
      dateAssigned: new Date(),
      status: 'Active'
    })
    return createAdviser
  }

  async setDean ({ FacultyId }) {
    const faculty = await DbModels.Faculty.findByPk(FacultyId)

    if (!faculty) {
      throw new Error('FACULTY_NOT_FOUND')
    }
    const createDean = await DbModels.Dean.create({
      FacultyId,
      dateAssigned: new Date(),
      status: 'Active'
    })
    return createDean
  }

  async getSchedConsultation ({ FacultyId }) {
    const faculty = await DbModels.Faculty.findByPk(FacultyId, { include: [DbModels.ConsultationSchedule] })
    return faculty.ConsultationSchedules
  }

  async getSection ({ FacultyId }) {
    const faculty = await DbModels.Faculty.findByPk(FacultyId, { include: [DbModels.ResearchSection] })
    return faculty.ResearchSections
  }
}
