var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {	
	request('https://maps.googleapis.com/maps/api/js?key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&callback=initMap', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			res.send(body);
		}
	});
});

module.exports = router;
