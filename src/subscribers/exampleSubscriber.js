const Logger = require('../loaders/logger');

module.exports = function (EE) {

EE.on('ExampleEvent', () => {
    Logger.info('EMMITER: ExampleEvent was triggered');
  });

};