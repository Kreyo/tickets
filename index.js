const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/'));

app.listen(3000, function () {
  console.log('Ticket selling app listening on port 3000!');
});

module.exports = app;
