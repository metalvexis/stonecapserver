import BasicRoute from 'route/BasicRoute.js'

import { ConsultationScheduleController } from 'controller/'

const consultationSchedule = new ConsultationScheduleController()

const basicRoute = new BasicRoute(consultationSchedule)

const router = basicRoute.getRouter()

router.post('/createSchedule', async (req, res, next) => {
  const {
    FacultyId, dateTime, room
  } = req.body

  try {
    const newSchedule = await consultationSchedule.createSchedule({ FacultyId, dateTime, room })
    res.send(newSchedule)
  } catch (err) {
    next(err)
  }
})

export default router
