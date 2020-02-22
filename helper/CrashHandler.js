import { Logger } from './Logger.js'
// Event handlers for sudden crashes
const logger = new Logger({ service: 'app', module: 'crash-tracker' })
process.on('uncaughtException', function (er) {
  logger.err(er.stack)
  process.exit(1)
})

process.on('SIGTERM', function (er) {
  logger.err(er.stack)
  process.exit(1)
})

process.on('SIGINT', () => { process.exit() })
