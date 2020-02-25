/**
 *    Use this client only for raw SQL Queries
 *    use sequelizeClient for all other DB tasks
 */

import { Client } from 'pg'

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})

let isConnected = false

async function getClient () {
  if (!isConnected) {
    try {
      await client.connect()
      isConnected = true
      global.logger.info('Database Connected using node-postgres')
    } catch (err) {
      global.logger.err(err.stack)
    }
  }
  return client
}

export const pgClient = {
  getClient
}
