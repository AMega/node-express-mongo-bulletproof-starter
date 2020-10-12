const events = require('events');

// Create new Event Emmiter and store as EE
const EE = new events.EventEmitter();

// load the subscribers
// create more files under ../subscribers and add them here
require('../subscribers/exampleSubscriber')(EE);


module.exports = EE;