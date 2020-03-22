import express from 'express'

import { AuthController } from 'controller/'

import { Email } from 'helper/Email.js'

const router = express.Router()

router.post('/register', async (req, res, next) => {
  const {
    email, password, fName, lName, userType
  } = req.body

  try {
    const isRegistered = await AuthController.register({ email, password, fName, lName, userType })

    if (isRegistered) {
      const mail = Email.createMessage({
        to: email,
        subject: 'User Registration',
        text: `You can now login to the system using your email and your password is ${password}`
      })
      await mail.send()
    }

    res.send(true)
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
