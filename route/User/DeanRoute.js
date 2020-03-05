import BasicRoute from 'route/BasicRoute.js'

import { DeanController } from 'controller/'

const dean = new DeanController()

const router = new BasicRoute(dean)

export default router.getRoute()
