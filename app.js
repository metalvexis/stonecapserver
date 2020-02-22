import { initSequelizeClient } from './db/'
import expressApp from 'config/express.js'

async function initApp () {
  try {
    await initSequelizeClient()
    await expressApp.start()
  } catch (err) {
    global.logger.err(err.stack)
  }
}

initApp()
