import { Logger } from 'helper/Logger.js';

let logger = new Logger({service: 'stonecap', module: 'error-tracker'});

// use this Error class for App specific errors
export class StoneError extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const ErrorHandler = (err, req, res, next) => {
  const { statusCode, message, stack } = err;

  let status = statusCode ? statusCode : 500;

  logger.err(stack);

  res.status(status).json({
    status: "error",
    statusCode,
    message
  });
};
