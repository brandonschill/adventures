var express = require('express');
var app = express();
var router = require('./api.js');

app.use('/query', router);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
  console.log('I am here')
});

app.get('/form.js', function(req, res) {
  res.sendFile(__dirname + '/form.js');
});

app.listen(1337);

