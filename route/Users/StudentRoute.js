import BasicRoute from 'route/BasicRoute.js'

import { StudentController } from 'controller/Users/StudentController.js'

const student = new StudentController()

const router = new BasicRoute(student)

export default router.getRoute()

