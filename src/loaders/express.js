const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

// initialize our express app
const app = express();

// Express Middlewares
app.use(bodyParser.json()); // Use BodyParser
app.use(express.json()); // User JSON
app.use(compression()); // Enable HTTP Compression

// security
app.disable('x-powered-by'); // Disable header for security
app.use(cors()); // Enable CORS

// Load routes
require('../routes')(app);

module.exports = app;


