require('dotenv').config('../.env');
// if (envFound.error) {
//   // This error should crash whole process

//   throw new Error("⚠️  Couldn't find .env file  ⚠️");
//}



module.exports = {

// Set the NODE_ENV to 'development' by default
// Comment out for PRODUCTION
ENV: process.env.NODE_ENV || 'DEV',
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 3000),
  appHostname: 'localhost',

  /**
   * That long string from mlab
   */
  databaseURL: process.env.MONGODB_URI,
  databasePoolSize : process.env.MONGODB_POOLSIZE,

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET,

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * Agenda.js stuff
   */
  agenda: {
    dbCollection: process.env.AGENDA_DB_COLLECTION,
    pooltime: process.env.AGENDA_POOL_TIME,
    concurrency: parseInt(process.env.AGENDA_CONCURRENCY, 10),
  },

  /**
   * Agendash config
   */
  agendash: {
    user: 'agendash',
    password: '123456'
  },
  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
  /**
   * Mailgun email credentials
   */
  emails: {
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  }
};

