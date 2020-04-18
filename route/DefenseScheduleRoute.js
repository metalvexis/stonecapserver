import BasicRoute from 'route/BasicRoute.js'

import { DefenseScheduleController } from 'controller/'

const defenseSchedule = new DefenseScheduleController()

const basicRoute = new BasicRoute(defenseSchedule)

const router = basicRoute.getRouter()

router.post('/createDefenseSchedule', async (req, res, next) => {
  const {
    ResearchProjectId, PanelistIds, dateTime, venue, category
  } = req.body

  try {
    const newDefenseSched = await defenseSchedule.createDefenseSchedule({ ResearchProjectId, PanelistIds, dateTime, venue, category })
    res.send(newDefenseSched)
  } catch (err) {
    next(err)
  }
})

export default router
