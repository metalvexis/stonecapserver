import winston, { format } from 'winston';
import { PapertrailConnection, PapertrailTransport } from 'winston-papertrail';
const { combine, timestamp, label, printf, colorize } = format;

const levels = { 
  emerg: 0, 
  alert: 1, 
  crit: 2, 
  error: 3, 
  warning: 4, 
  notice: 5, 
  info: 6, 
  debug: 7
};

const customPrint = printf(({ level, message, label, timestamp, service }) => {
  return `${timestamp} [${service}::${label}] [${level}] : ${message}`;
});

let consoleLogger = new winston.transports.Console();

const ptConnection = new PapertrailConnection({
  host: process.env.PAPERTRAIL_HOST,
  port: process.env.PAPERTRAIL_PORT
});

ptConnection.on('error', function(err) {
  setTimeout(()=>{
    let logger = new Logger();
  logger.err(JSON.stringify(err));
  },1000)
});

ptConnection.on('connect', function(message) {
  setTimeout(()=>{
    let logger = new Logger();
  logger.info(message);
  },1000)
  
});

const attachService = format(( info, opts )=>{

  if(opts.service) info.service = opts.service;

  return info;
});

const moduleFormat = ({module, service}) => {
  return combine(
    colorize(),
    label({ label: module }),
    timestamp(),
    attachService({ service }),
    customPrint,
  );
};

export class Logger {
  constructor({service, module} = {}){
    
    this.service = service || "server";
    this.module = module || "logger";
    let program =`[${this.service}::${this.module}]`;
    const ptTransport = new PapertrailTransport(ptConnection,{
      program,
      logFormat: function(level, message) {
        return `[${level}] : ${message}`;
      }
    });
    
    this.logger = winston.createLogger({
      levels,
      colorize: true,
      transports:[
        consoleLogger,
        ptTransport
      ],
      format: moduleFormat({ module: this.module, service: this.service })
    });
  }

  info(message){
    this.logger['info'](message);
  }

  warn(message){
    this.logger['warning'](message);
  }

  err(message){
    this.logger['error'](message);
  }
}




export default new Logger();
