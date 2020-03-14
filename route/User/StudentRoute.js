import BasicRoute from 'route/BasicRoute.js'

import { StudentController } from 'controller/'

const studentController = new StudentController()

const basicRoute = new BasicRoute(studentController)

const router = basicRoute.getRouter()

router.get('/:id/section', async (req, res, next) => {
  const {
    id
  } = req.params

  try {
    res.send(await studentController.getSection({ StudentId: id }))
  } catch (err) {
    next(err)
  }
})

router.get('/:id/project', async (req, res, next) => {
  const {
    id
  } = req.params

  try {
    res.send(await studentController.getProject({ StudentId: id }))
  } catch (err) {
    next(err)
  }
})

export default router
