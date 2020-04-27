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

  async setPanelist ({ FacultyIds, ResearchProjectId }) {
    const faculty = await DbModels.Faculty.findAll({
      where: {
        id: {
          [DbModels.Sequelize.Op.in]: FacultyIds
        }
      }
    })
    const research = await DbModels.ResearchProject.findByPk(ResearchProjectId)

    const query = {
      where: {
        ResearchProjectId
      }
    }

    if (!faculty) {
      throw new Error('FACULTY_NOT_FOUND')
    }

    if (!research) {
      throw new Error('RESEARCH_NOT_FOUND')
    }

    const existingPanelists = await DbModels.Proponent.findAll(query)

    if (existingPanelists) DbModels.Panelist.destroy(query)

    const createPanelists = FacultyIds.map(FacultyId => {
      const createPanelist = DbModels.Panelist.create({
        FacultyId,
        ResearchProjectId,
        dateAssigned: new Date(),
        status: 'Active'
      })

      return createPanelist
    })

    const result = await Promise.all(createPanelists)
    return result
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
    const faculty = await DbModels.Faculty.findByPk(FacultyId, { include: { all: true } })
    return faculty.ConsultationSchedules
  }

  async getSchedDefense ({ FacultyId }) {
    const asCoordinator = await DbModels.Faculty.findByPk(FacultyId, {
      include: [
        {
          required: false,
          model: DbModels.ResearchSection,
          include: [
            {
              model: DbModels.Student,
              include: [
                {
                  model: DbModels.ResearchProject
                }
              ]
            }
          ]
        }
      ]
    })

    const asPanelist = await DbModels.Panelist.findAll({
      where: {
        FacultyId
      },
      include: [
        {
          model: DbModels.ResearchProject
        }
      ]
    })

    const panelProjectIds = [];

    asPanelist.map(panel => {
      panel = panel.get()
      panelProjectIds.push(panel.ResearchProject.id)
    })

    const seenPanelProjectIds = new Set()

    const filteredPanelProjectIds = panelProjectIds.filter(id => {
      const duplicate = seenPanelProjectIds.has(id)
      seenPanelProjectIds.add(id)
      return !duplicate
    })

    const taskGetPanelSched = filteredPanelProjectIds.map(async (projectId) => {
      return DbModels.DefenseSchedule.findAll({
        where: {
          ResearchProjectId: projectId
        },
        include: [
          {
            model: DbModels.DefenseType
          }
        ]
      })
    })

    const schedAsPanelist = await Promise.all(taskGetPanelSched)

    const sections = asCoordinator.ResearchSections

    const researchProjectIds = []
    sections.forEach(section => {
      const sec = section.get()
      sec.Students.forEach(student => {
        const stud = student.get()
        stud.ResearchProjects.map(researchProject => {
          const research = researchProject.get({ plain: true })
          console.log({ research })
          researchProjectIds.push(research.id)
        })
      })
    })

    // Remove duplicate elem/objects in array
    const seen = new Set()

    const filteredProjectIds = researchProjectIds.filter(id => {
      const duplicate = seen.has(id)
      seen.add(id)
      return !duplicate
    })

    const taskGetAllSchedule = filteredProjectIds.map(async (projectId) => {
      return DbModels.DefenseSchedule.findAll({
        where: {
          ResearchProjectId: projectId
        },
        include: [
          {
            model: DbModels.DefenseType
          }
        ]
      })
    })

    const schedules = await Promise.all(taskGetAllSchedule)
    const schedAsCoordinator = schedules.reduce((acc, schedule) => acc.concat(schedule), [])

    return {
      asCoordinator: schedAsCoordinator,
      asPanelist: schedAsPanelist
    }
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

