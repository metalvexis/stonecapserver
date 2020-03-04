import { Logger } from 'helper/Logger.js'
import db from 'db/models/'

let isConnected = false

const client = db.sequelize

function getClient () {
  return new Promise((resolve, reject) => {
    const logger = new Logger({ service: 'server', module: 'sequelizeClient' })
    if (!isConnected) {
      try {
        client.authenticate()
        client.sync() // create tables if not yet created
        isConnected = true
        logger.info('Database Connected using Sequelize')
        resolve(client)
      } catch (err) {
        logger.err(err.stack)
        reject(err)
      }
    } else {
      resolve(client)
    }
  })
}

export const SequelizeClient = {
  getClient
}

export default db // contains all Model interface defined in /db/models/
