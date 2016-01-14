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

	var request = {
		location: map.getCenter(),
		radius: '5000',
	}

	completed.addListener('places_changed', function() {
		var myPlaces = completed.getPlaces();
		for(var i = 0; i < myPlaces.length; i++) {

			if(myPlaces[i].photos) {

				//Create a new div
				var newDiv = document.createElement('div');
				// newDiv.className = 'hikes';

				var newImage = document.createElement('img');

				newImage.setAttribute('src', myPlaces[i].photos[0].getUrl({maxWidth: 100, maxHeight: 100}));

				//Create a new text node
				var newHikeName = document.createTextNode(myPlaces[i].name);

				newDiv.appendChild(newHikeName);

				//Update the text using the object in myPlaces
				var places = document.getElementsByClassName('hikeresults');

				//Attach div to the dom
				places[0].appendChild(newDiv);
				places[0].appendChild(newImage);
				console.log(myPlaces)
			};
		};
	});
};

