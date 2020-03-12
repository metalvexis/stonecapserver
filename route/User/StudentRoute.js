import BasicRoute from 'route/BasicRoute.js'

import { StudentController } from 'controller/'

const studentController = new StudentController()

const basicRoute = new BasicRoute(studentController)

const router = basicRoute.getRouter()

export default router
