import { initSequelizeClient } from './db/'
import expressApp from 'config/express.js'

async function initApp () {
  await initSequelizeClient()
  await expressApp.start()
}

initApp()
