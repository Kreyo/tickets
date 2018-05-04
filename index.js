const express = require('express');
const app = express();
const path = require('path');


/**
 * MongoDB config
 */
const databaseHost = 'localhost';
const databasePort = '27017';
const databaseName = 'tickets';

const mongo = require('./db/mongo');
let connection = new mongo(databaseHost, databasePort, databaseName);

app.use(express.static(__dirname + '/dist/'));

app.get('/flight-list', function(req, res) {
  connection.fetchFlights((result) => {
    res.send(result);
  });

});

app.use(function(req, res) {
  res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});

app.listen(3000, function () {
  console.log('Ticket selling app listening on port 3000!');
});

module.exports = app;
