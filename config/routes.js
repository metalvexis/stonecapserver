import express from 'express'

import { AuthRoute, StudentRoute, FacultyRoute, CoordinatorRoute, DeanRoute } from 'route/'

const router = express.Router()

router.all('/', (req, res) => {
  res.send('Welcome to my E-Commerce API<br><br>Documentation: <a href="https://github.com/metalvexis/stonecapserver">https://github.com/metalvexis/stonecapserver</a>');
})

router.all('/failure', (req, res, next) => {
  next(new Error('TEST'))
})

router.use('/auth', AuthRoute)

router.use('/student', StudentRoute)

router.use('/faculty', FacultyRoute)

router.use('/dean', DeanRoute)

router.use('/coordinator', CoordinatorRoute)

export default router
