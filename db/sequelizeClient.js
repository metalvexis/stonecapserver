import Sequelize from 'sequelize'
import { Logger } from 'helper/Logger.js'

let isConnected = false

const logger = new Logger({ service: 'server', module: 'sequelizeClient' })

const client = new Sequelize(
  process.env.DB_HOST,
  {
    dialect: 'postgres',
    logging: (msg) => logger.info(msg)
  }
)

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
    }
  })
}

export const sequelizeClient = {
  getClient
}
