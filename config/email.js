import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nambawanpakwan@gmail.com',
    pass: 'James1994!'
  },
  logger: true
})
