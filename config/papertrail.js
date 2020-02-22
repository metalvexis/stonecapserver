import { PapertrailConnection } from 'winston-papertrail'

let ptConnection = null

export function getPtConnection () {
  if (!ptConnection) {
    ptConnection = new PapertrailConnection({
      host: process.env.PAPERTRAIL_HOST,
      port: process.env.PAPERTRAIL_PORT
    })
    ptConnection.on('error', function (err) {
      global.logger.err(err.stack)
    })
    ptConnection.on('connect', function (message) {
      global.logger.info(message)
    })
    return ptConnection
  } else {
    return ptConnection
  }
}
