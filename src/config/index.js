require('dotenv').config({path:__dirname+'/./../.env'});


module.exports = {

    // ENVIRONMENT
    EVN: process.env.NODE_ENV || 'PRODUCTION',

    port: process.env.PORT,
    appHostname: 'http://localhost',
    // Mongo DB config
    databaseURL: process.env.MONGODB_URI,
    databasePoolSize : process.env.MONGODB_POOLSIZE,

    // Winston Logger
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
      }


};