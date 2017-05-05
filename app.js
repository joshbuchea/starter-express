const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// *** START THE SERVER *** //
const server = app.listen(3000, '0.0.0.0', function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
