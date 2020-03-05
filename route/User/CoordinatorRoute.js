import BasicRoute from 'route/BasicRoute.js'

import { CoordinatorController } from 'controller/'

const coordinator = new CoordinatorController()

const router = new BasicRoute(coordinator)

export default router.getRoute()
