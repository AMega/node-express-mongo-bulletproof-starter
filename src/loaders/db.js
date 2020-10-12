const Mongoose = require('mongoose');
const config = require('../config');
const Logger = require('./logger');


// Use native ES6 promises
Mongoose.Promise = global.Promise;
Mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    // autoIndex: false, // uncomment in PROD
    poolSize: config.databasePoolSize
});

const db = Mongoose.connection;

db.on('error', () => {
    Logger.error(`MongoDB connection error ${config.databaseURL} \nPlease make sure MongoDB is running.`);
    process.exit();
});

db.once('open', () => {
    Logger.info('MongoDB Loaded and Conncted.');
});

process.on('SIGINT', () => {
    db.close(() => {
        Logger.info('MongoDB disconnected through app termination.');
        process.exit();
    });
});

module.exports = db;