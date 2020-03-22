import { transporter } from 'config/email.js'

export const Email = {
  // Follow email config: https://nodemailer.com/message/#common-fields
  createMessage ({ to, subject, text }) {
    const message = {
      from: 'nambawanpakwan@gmail.com',
      to,
      subject,
      text
    }

    return {
      send () {
        sendEmail(message)
      }
    }
  }
}

function sendEmail (mailOptions) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        // global.logger.err(error)
        reject(error.stack)
      } else {
        // global.logger.info('Email sent: ' + info.response)
        resolve(info.response)
      }
    })
  })
}
