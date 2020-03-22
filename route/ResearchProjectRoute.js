import BasicRoute from 'route/BasicRoute.js'

import { ResearchProjectController } from 'controller/'

const researchProject = new ResearchProjectController()

const basicRoute = new BasicRoute(researchProject)

const router = basicRoute.getRouter()

router.post('/createProject', async (req, res, next) => {
  const { studentIds, title, abstract } = req.body

  try {
    const newProject = await researchProject.createProject({ studentIds, title, abstract })
    res.send(newProject)
  } catch (err) {
    next(err)
  }
})

router.post('/createAppointment', async (req, res, next) => {
  const { ResearchProjectId, ConsultationScheduleId, concern } = req.body

  try {
    const newProject = await researchProject.createAppointment({ ResearchProjectId, ConsultationScheduleId, concern })
    res.send(newProject)
  } catch (err) {
    next(err)
  }
})

router.post('/setProponent', async (req, res, next) => {
  const { ResearchProjectId, StudentIds } = req.body

  try {
    const proponent = await researchProject.setProponent({ ResearchProjectId, StudentIds })
    res.send(proponent)
  } catch (err) {
    next(err)
  }
})
// addProponent

export default router
