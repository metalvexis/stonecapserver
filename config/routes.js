import express from 'express'

import { StudentRoute, FacultyRoute } from 'route/'

const router = express.Router()

router.all('/', (req, res)=>{
  res.send('Welcome to my E-Commerce API<br><br>Documentation: <a href="https://github.com/metalvexis/stonecapserver">https://github.com/metalvexis/stonecapserver</a>');
})

router.use('/student', StudentRoute)

router.use('/faculty', FacultyRoute)

export default router
