import BasicRoute from 'route/BasicRoute.js'

import { FacultyController } from 'controller/'

const facultyController = new FacultyController()

const basicRoute = new BasicRoute(facultyController)

const router = basicRoute.getRouter()

router.post('/setCoordinator', async (req, res, next) => {
  const { FacultyId } = req.body
  try {
    await facultyController.setCoordinator({ FacultyId })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.post('/setDean', async (req, res, next) => {
  const { FacultyId } = req.body
  try {
    await facultyController.setDean({ FacultyId })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.post('/setAdviser', async (req, res, next) => {
  const { FacultyId, ResearchProjectId } = req.body
  try {
    await facultyController.setAdviser({ FacultyId, ResearchProjectId })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.post('/setPanelist', async (req, res, next) => {
  const { FacultyId, ResearchProjectId } = req.body
  try {
    await facultyController.setPanelist({ FacultyId, ResearchProjectId })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

export default router
