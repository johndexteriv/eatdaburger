
const scout = require('@scout_apm/scout-apm');
const express = require('express');

async function start() {
  // Trigger the download and installation of the core-agent
  await scout.install({
    allowShutdown: false, // allow shutting down spawned scout-agent processes from this program
    monitor: true, // enable monitoring
    name: 'eat da burger',
    key: process.env.SCOUT_KEY,
  });
}

var PORT = process.env.PORT || 8080;
var app = express();

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

app.listen(PORT, function () {
  console.log('Server Listening on: http://localhost:' + PORT);
});

start();