import BasicRoute from 'route/BasicRoute.js'

import { DefenseScheduleController } from 'controller/'

const defenseSchedule = new DefenseScheduleController()

const basicRoute = new BasicRoute(defenseSchedule)

const router = basicRoute.getRouter()

export default router
