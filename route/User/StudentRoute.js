import BasicRoute from 'route/BasicRoute.js'

import { StudentController } from 'controller/'

const student = new StudentController()

const router = new BasicRoute(student)

export default router.getRoute()
