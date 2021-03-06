import BasicRoute from 'route/BasicRoute.js'

import { FacultyController } from 'controller/'

const faculty = new FacultyController()

const basicRoute = new BasicRoute(faculty)

const router = basicRoute.getRoute()

router.post('/setCoordinator', async (req, res, next) => {
  const { FacultyId } = req.body
  try {
    await faculty.setCoordinator({ FacultyId })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.post('/setDean', async (req, res, next) => {
  const { FacultyId } = req.body
  try {
    await faculty.setDean({ FacultyId })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.post('/setAdviser', async (req, res, next) => {
  const { FacultyId, ResearchProjectId } = req.body
  try {
    await faculty.setAdviser({ FacultyId, ResearchProjectId })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.post('/setPanelist', async (req, res, next) => {
  const { FacultyId, ResearchProjectId } = req.body
  try {
    await faculty.setPanelist({ FacultyId, ResearchProjectId })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

export default router
