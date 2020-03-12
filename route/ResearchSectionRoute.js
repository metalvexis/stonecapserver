import BasicRoute from 'route/BasicRoute.js'

import { ResearchSectionController } from 'controller/'

const researchSection = new ResearchSectionController()

const basicRoute = new BasicRoute(researchSection)

const router = basicRoute.getRouter()

router.post('/createSection', async (req, res, next) => {
  const {
    name, FacultyId, PeriodId
  } = req.body

  try {
    const newSection = await researchSection.createSection({ name, FacultyId, PeriodId })
    res.send(newSection)
  } catch (err) {
    next(err)
  }
})

export default router
