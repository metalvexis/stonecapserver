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
  const { FacultyIds, ResearchProjectId } = req.body
  try {
    await facultyController.setPanelist({ FacultyIds, ResearchProjectId })
    res.sendStatus(200)
  } catch (err) {
    next(err)
  }
})

router.get('/:id/schedule/consultation', async (req, res, next) => {
  try {
    if (req.params.id) {
      res.send(await facultyController.getSchedConsultation({ FacultyId: req.params.id }))
    } else {
      res.send([])
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:id/schedule/defense', async (req, res, next) => {
  try {
    if (req.params.id) {
      res.send(await facultyController.getSchedDefense({ FacultyId: req.params.id }))
    } else {
      res.send([])
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:id/section', async (req, res, next) => {
  try {
    if (req.params.id) {
      res.send(await facultyController.getSection({ FacultyId: req.params.id }))
    } else {
      res.send([])
    }
  } catch (err) {
    next(err)
  }
})

router.get('/:id/project', async (req, res, next) => {
  try {
    if (req.params.id) {
      res.send(await facultyController.getProject({ FacultyId: req.params.id }))
    } else {
      res.send([])
    }
  } catch (err) {
    next(err)
  }
})

export default router
