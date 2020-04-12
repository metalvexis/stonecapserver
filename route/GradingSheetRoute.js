import BasicRoute from 'route/BasicRoute.js'

import { GradingSheetController } from 'controller/'

const gradingSheet = new GradingSheetController()

const basicRoute = new BasicRoute(gradingSheet)

const router = basicRoute.getRouter()

router.post('/createGradingSheet', async (req, res, next) => {
  const {
    ResearchProjectId, PanelistIds, criteria
  } = req.body

  try {
    const newGradingSheet = await gradingSheet.createGradingSheet({ ResearchProjectId, PanelistIds, criteria })
    res.send(newGradingSheet)
  } catch (err) {
    next(err)
  }
})

export default router
