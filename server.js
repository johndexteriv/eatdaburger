const scout = require('@scout_apm/scout-apm');
const process = require('process');
const express = require('express');

var PORT = process.env.PORT || 8080;

// Initialize the express application
const app = express();

// Enable the app-wide scout middleware
app.use(scout.expressMiddleware());

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use(routes);

// Shut down the core-agent when this program exits
process.on('exit', () => {
  if (app && app.scout) {
    app.scout.shutdown();
  }
});

// Start application
async function start() {
  // Install and wait for scout to set up
  await scout.install({
    monitor: true, // enable monitoring
    name: 'eat da burger',
    key: 'zT6DaR4cWVqT2DdZzUm3',

    // allow scout to be shutdown when the process exits
    allowShutdown: true,
  });

  // Start the server
  app.listen(PORT, function () {
    console.log('Server Listening on: http://localhost:' + PORT);
  });
}

if (require.main === module) {
  start();
}
