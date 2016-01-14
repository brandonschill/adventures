// This sample uses the Place Autocomplete widget to allow the user to search
// for and select a place. The sample then displays an info window containing
// the place ID and other information about the place that the user has
// selected.

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 37.8499, lng: -119.5677},
		zoom: 12
	});

	var input = document.getElementById('pac-input');

	var completed = new google.maps.places.SearchBox(input, null);

	completed.addListener('places_changed', function() {
		var myPlaces = completed.getPlaces();
		for(var i = 0; i < myPlaces.length; i++) {

			//Create a new div
			var newDiv = document.createElement('div');
			newDiv.className = 'hikes';

			//Create a new text node
			var newHike = document.createTextNode(myPlaces[i].photos.length);

			//Attach the text node to the div
			newDiv.appendChild(newHike);

			//Update the text using the object in myPlaces
			var places = document.getElementsByClassName('hikeresults');

			//Attach div to the dom
			places[0].appendChild(newDiv);
			console.log(myPlaces)

		};
	});
};

