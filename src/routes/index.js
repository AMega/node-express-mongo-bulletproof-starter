module.exports = function (app) {
    // EXAMPLE :
    // const ExampleController = require('../controllers/ExampleController'),
    // app.use('/api/posts', ExampleController);

    app.get('/', function (req, res) {
        res.status(200).json({ message: "OK"});
      });
      
};