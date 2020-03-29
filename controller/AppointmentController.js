import BasicController from 'controller/BasicController.js'

import { Email } from 'helper/Email.js'

import moment from 'moment'

import { DbModels } from 'db/'

export class AppointmentController extends BasicController {
  constructor () {
    super('Appointment')
  }

  all () {
    return DbModels.Appointment.findAll({ include: { all: true } })
  }

  async sendRequest ({ ResearchProjectId, ConsultationScheduleId, concern }) {
    if (!ResearchProjectId || !ConsultationScheduleId) throw new Error('INVALID_SCHED')

    const project = await DbModels.ResearchProject.findByPk(ResearchProjectId, { include: { all: true } })

    const consultation = await DbModels.ConsultationSchedule.findByPk(ConsultationScheduleId, { include: { all: true } })
    let email = ''

    if (consultation.Faculty && consultation.Faculty.email) {
      email = consultation.Faculty.email
    }

    const newAppointment = await DbModels.Appointment.create({
      ResearchProjectId,
      ConsultationScheduleId,
      concern,
      status: 'Pending'
    })

    const mail = Email.createMessage({
      to: email,
      subject: 'Pending Appointment Request',
      text: `Proponents of ${project.title} wants to consult with you with the following concern:
      -------

      ${concern}

      -------
      Review this request in the Appointment page`
    })

    await mail.send()

    return newAppointment
  }

  async sendResponse ({ ResearchProjectId, ConsultationScheduleId, prerequisite, status }) {
    if (!ResearchProjectId || !ConsultationScheduleId) throw new Error('INVALID_SCHED')

    const project = await DbModels.ResearchProject.findByPk(ResearchProjectId, { include: { all: true } })

    const consultation = await DbModels.ConsultationSchedule.findByPk(ConsultationScheduleId, { include: { all: true } })

    let emails = []

    if (project.Students) {
      emails = project.Students.map(s => s.email)
    }

    let appointment = null

    if (status === 'Accepted') {
      appointment = await DbModels.Appointment.update(
        {
          prerequisite,
          status
        },
        {
          where: {
            ResearchProjectId,
            ConsultationScheduleId
          }
        })
    } else if (status === 'Rejected') {
      appointment = await DbModels.Appointment.update(
        {
          status
        },
        {
          where: {
            ResearchProjectId,
            ConsultationScheduleId
          }
        })
    }

    await Promise.all(emails.map(email => {
      const mail = Email.createMessage({
        to: email,
        subject: 'Appointment Request Response',
        text: `Your request to consult ${consultation.Faculty.fName} ${consultation.Faculty.lName} is ${status}`
      })
      return mail.send()
    }))

    return appointment
  }

  async setFedback ({ ResearchProjectId, ConsultationScheduleId, feedback }) {
    const appointment = await DbModels.Appointment.update(
      {
        feedback,
        status: 'Closed'
      },
      {
        where: {
          ResearchProjectId,
          ConsultationScheduleId
        }
      })

    return appointment
  }
}
