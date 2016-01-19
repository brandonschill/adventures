var express = require('express');
var app = express();
var apiRouter = require('./api.js');
var map = require('./map.js');
var path = require('path');

app.use('/api', apiRouter);

app.use(express.static('./'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1337);
console.log('1337 is active.');
