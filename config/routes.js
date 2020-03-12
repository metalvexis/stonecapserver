import express from 'express'

import { AuthRoute, StudentRoute, FacultyRoute, ResearchSectionRoute, PeriodRoute } from 'route/'

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

router.use('/period', PeriodRoute)

router.use('/section', ResearchSectionRoute)

export default router
