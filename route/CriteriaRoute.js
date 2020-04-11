import BasicRoute from 'route/BasicRoute.js'

import { CriteriaController } from 'controller/'

const criteria = new CriteriaController()

const basicRoute = new BasicRoute(criteria)

const router = basicRoute.getRouter()

export default router
