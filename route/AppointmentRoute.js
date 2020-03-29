import BasicRoute from 'route/BasicRoute.js'

import { AppointmentController } from 'controller/'

const appointment = new AppointmentController()

const basicRoute = new BasicRoute(appointment)

const router = basicRoute.getRouter()

router.post('/sendRequest', async (req, res, next) => {
  const {
    ResearchProjectId, ConsultationScheduleId, concern
  } = req.body

  try {
    const newAppointment = await appointment.sendRequest({ ResearchProjectId, ConsultationScheduleId, concern })
    res.send(newAppointment)
  } catch (err) {
    next(err)
  }
})

router.post('/sendResponse', async (req, res, next) => {
  const {
    ResearchProjectId, ConsultationScheduleId, prerequisite, status
  } = req.body

  try {
    const newAppointment = await appointment.sendResponse({ ResearchProjectId, ConsultationScheduleId, prerequisite, status })
    res.send(newAppointment)
  } catch (err) {
    next(err)
  }
})

router.post('/setFeedback', async (req, res, next) => {
  const {
    ResearchProjectId, ConsultationScheduleId, feedback
  } = req.body

  try {
    const newAppointment = await appointment.setFedback({ ResearchProjectId, ConsultationScheduleId, feedback })
    res.send(newAppointment)
  } catch (err) {
    next(err)
  }
})

export default router
