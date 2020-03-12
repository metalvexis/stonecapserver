import BasicRoute from 'route/BasicRoute.js'

import { PeriodController } from 'controller/'

const period = new PeriodController()

const basicRoute = new BasicRoute(period)

const router = basicRoute.getRoute()

router.post('/createPeriod', async (req, res, next) => {
  const { schoolYear, semester } = req.body
  try {
    const newPeriod = await period.createPeriod({ schoolYear, semester })
    res.send(newPeriod)
  } catch (err) {
    next(err)
  }
})

export default router
