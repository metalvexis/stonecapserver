import winston, { format } from 'winston'
import { PapertrailTransport } from 'winston-papertrail'
import { getPtConnection } from 'config/papertrail.js'
const { combine, timestamp, label, printf, colorize } = format

const levels = {
  emerg: 0,
  alert: 1,
  crit: 2,
  error: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7
}

const customPrint = printf(({ level, message, label, timestamp, service }) => {
  return `${timestamp} [${service}::${label}] [${level}] : ${message}`
})

const consoleLogger = new winston.transports.Console()

const attachService = format((info, opts) => {
  if (opts.service) info.service = opts.service

  return info
})

const moduleFormat = ({ module, service }) => {
  return combine(
    colorize(),
    label({ label: module }),
    timestamp(),
    attachService({ service }),
    customPrint
  )
}

const getLogger = ({ service, module } = {}) => {
  const program = `[${service}::${module}]`
  const ptConnection = getPtConnection()
  const ptTransport = new PapertrailTransport(ptConnection, {
    program,
    logFormat: function (level, message) {
      return `[${level}] : ${message}`
    }
  })

  const logger = winston.createLogger({
    levels,
    colorize: true,
    transports: [
      consoleLogger,
      ptTransport
    ],
    format: moduleFormat({ service, module })
  })

  return logger
}

export class Logger {
  constructor ({ service, module } = {}) {
    this.service = service || 'server'
    this.module = module || 'logger'
  }

  initLogger () {
    this.logger = getLogger({ service: this.service, module: this.module })
  }

  async info (message) {
    if (!this.logger) this.initLogger()

    this.logger.info(message)
  }

  async warn (message) {
    if (!this.logger) this.initLogger()

    this.logger.warning(message)
  }

  async err (message) {
    if (!this.logger) this.initLogger()

    this.logger.error(message)
  }
}

global.logger = new Logger()
