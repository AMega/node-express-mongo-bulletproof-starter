const winston = require('winston');
const config = require('../config');
 
const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.simple(),
    winston.format.json()
  ),
  // defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    new winston.transports.File({ 
      filename: __dirname+'/./../../logs/error.log', 
      level: 'error', 
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),
        winston.format.json()
      ) 
    }),
    
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ 
      filename: __dirname+'/./../../logs/combined.log', 
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),
        winston.format.json()
      ) 
    }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV == 'develpment') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
  }));
}

module.exports = logger;