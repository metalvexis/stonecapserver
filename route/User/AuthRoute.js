import express from 'express'

import { AuthController } from 'controller/'

const router = express.Router()

router.post('/register', async (req, res, next) => {
  const {
    email, password, fName, lName, userType
  } = req.body

  try {
    const response = await AuthController.register({ email, password, fName, lName, userType })
    res.send(response)
  } catch (err) {
    next(err)
  }
})

router.post('/login', async (req, res, next) => {
  const {
    email, password
  } = req.body

  try {
    const response = await AuthController.login({ email, password })
    res.send(response)
  } catch (err) {
    next(err)
  }
})

export default router
