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

    if (!faculty || !research) {
      throw new Error('INVALID_PARAMS')
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

  async getProject ({ FacultyId }) {
    let projectList = []
    const currentPeriod = await DbModels.Period.findOne({
      where: {
        schoolYear: '2019',
        semester: '2'
      }
    })

    const faculty = await DbModels.Faculty.findByPk(FacultyId, {
      include: [
        {
          model: DbModels.ResearchSection,
          where: {
            PeriodId: currentPeriod.id
          },
          include: { all: true }
        }
      ]
    })

    // faculty = faculty.get()

    if (faculty.ResearchSections) { // Faculty is a coordinator of the current period
      const students = await Promise.all(
        faculty.ResearchSections.map(async (section) => {
          const s = await section.getStudents()
          return s
        })
      )

      const studentIds = []

      await Promise.all(
        students.map((student) => {
          student.forEach(s=>{
            if (s) {
              const studentId = s.get('id')
              // return studentId
              studentIds.push(studentId)
            }
          })
        })
      )

      const p = await DbModels.ResearchProject.findAll({
        where: {
          status: 'IP'
        },
        include: [
          {
            model: DbModels.Student,
            where: {
              id: {
                [DbModels.Sequelize.Op.in]: studentIds
              }
            }
          }
        ]
      })
      projectList = projectList.concat(p)
    } else {
      projectList = projectList.concat(faculty.ResearchProjects)
    }

    return projectList
  }
}

