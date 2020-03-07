import { initSequelizeClient } from './db/'

import expressApp from 'config/express.js'

import listEndpoints from 'express-list-endpoints'

async function initApp () {
  try {
    await initSequelizeClient()
    const app = await expressApp.start()

    console.table(listEndpoints(app))

  } catch (err) {
    global.logger.err(err.stack)
  }
}

initApp()
