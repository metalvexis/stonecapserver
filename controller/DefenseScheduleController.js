import BasicController from 'controller/BasicController.js'

import { DbModels } from 'db/'

import { Email } from 'helper/Email.js'

import moment from 'moment'

export class DefenseScheduleController extends BasicController {
  constructor () {
    super('DefenseSchedules')
  }

  all () {
    return DbModels.DefenseSchedule.findAll({ include: { all: true } })
  }

  async createDefenseSchedule ({ ResearchProjectId, PanelistIds = [], dateTime, venue, category } = {}) {

    const defenseType = await DbModels.DefenseType.findOne({ where: { category }, include: { all: true } })

    const DefenseTypeId = defenseType.id

    console.log({
      defenseType, DefenseTypeId
    })

    const defenseSched = {
      DefenseTypeId,
      ResearchProjectId,
      dateTime,
      venue
    }

    const panelists = await DbModels.Panelist.findAll({
      where: {
        id: {
          [DbModels.Sequelize.Op.in]: PanelistIds
        },
        ResearchProjectId
      },
      // raw: true,
      include: { all: true }
    })

    const sendTo = await panelists.map(panelist => panelist.Faculty.email)

    sendTo.forEach(email => {
      // Send emails to Panel
      const mail = Email.createMessage({
        to: email,
        subject: 'Defense Panel Invitation',
        text: `Invitation to Panel for Project
        What: Defense
        When: ${moment(dateTime).format('LLLL')}
        Where: ${venue}
        `
      })

      mail.send()
    })

    return DbModels.DefenseSchedule.create(defenseSched)
  }
}
