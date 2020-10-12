
// Load Config
const config = require('./config');

// Loaders
const Logger = require('./loaders/logger');
const EE = require('./loaders/events');

// Mongo DB and Mongoose
require('./loaders/db');

// Express
const app = require('./loaders/express'); 


// Start the Server
app.listen(config.port, () => {
    Logger.info(`------------------------------------------`);
    Logger.info(`App listening on ${config.appHostname}:${config.port}`);
});



