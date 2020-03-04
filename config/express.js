import express from 'express'
import bodyParser from 'body-parser'
import { ErrorHandler } from 'middleware/ErrorHandler.js'
import apiRoutes from './routes.js'

const app = express()
const port = process.env.PORT

app.use([
  bodyParser.json({ type: '*/json' }),
  bodyParser.urlencoded({ extended: true })
])

app.use('/health', (req, res, next) => {
  res.sendStatus(200)
})

app.use('/api', apiRoutes)

app.use(ErrorHandler) // Errors sink

function start () {
  return new Promise((resolve, reject) => {
    try {
      app.listen(port, () => global.logger.info(`App listening on port ${port}`))
      resolve(app)
    } catch (err) {
      global.logger.err(err.stack)
      reject(err)
    }
  })
}

export default {
  start
}
