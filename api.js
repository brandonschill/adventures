var express = require('express');
var router = express.Router();
var request = require('request');

// router.get('/', function(req, res) {	
// 	request('https://maps.googleapis.com/maps/api/js?key=AIzaSyAv-75HJMgoaYSx8djLXA02fTZAJIQCJSU&callback=initMap', function(error, response, body) {
// 		if (!error && response.statusCode == 200) {
// 			console.log(body);
// 			res.send(body);
// 		}
// 	});
// });

//EveryTrail api
//Key: 5f3e3655287f314cc8fd71b912e1e3d2	
//Secret: f301d342987e16bf	

router.get('/', function(req, res) {	
	//GR0DxKBaPpmshEpnVn8fbzpSuDdap11OOYVjsnTD5ei274O0Kw   trail key?
	request('https://maps.googleapis.com/maps/api/js?key=AIzaSyAv-75HJMgoaYSx8djLXA02fTZAJIQCJSU&callback=initMap', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body);
			res.send(body);
		}
	});
});

module.exports = router;