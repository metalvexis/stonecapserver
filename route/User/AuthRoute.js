import BasicRoute from 'route/BasicRoute.js'

import { AuthController } from 'controller/'

const router = express.Router()

router.post('/register', async (req, res, next) => {
  const {
    email, password, fName, lName, userType
  } = req.body

  try {
    return await AuthController.register({ email, password, fName, lName, userType })
  } catch (err) {
    next(err)
  }

})

router.post('/login', async (req, res, next) => {
  const {
    email, password
  } = req.body

  try {
    return await AuthController.login({ email, password })
  } catch (err) {
    next(err)
  }

})

export default router
