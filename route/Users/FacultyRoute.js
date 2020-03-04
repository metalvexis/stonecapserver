import BasicRoute from 'route/BasicRoute.js'

import { FacultyController } from 'controller/Users/FacultyController.js'

const faculty = new FacultyController()

const router = new BasicRoute(faculty)

export default router.getRoute()
