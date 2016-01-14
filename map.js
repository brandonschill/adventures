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


var marker = new google.maps.Marker({
	map: map
});

var searchBox = new google.maps.places.SearchBox(input, {});

searchBox.addListener('places_changed', function() {
	var places = searchBox.getPlaces();

	if (places.length == 0) {
		return;
	}

	markers.forEach(function(marker) {
		marker.setMap(null);
	});
	markers = [];

	var bounds = new google.maps.LatLngBounds();
	places.forEach(function(place) {
		var icon = {
			url: place.icon,
			size: new google.maps.Size(71, 71),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(17, 34),
			scaledSize: new google.maps.Size(25, 25)
		};

		markers.push(new google.maps.Marker({
			map: map,
			icon: icon,
			title: place.name,
			position: place.geometry.location
		}));

		if (place.geometry.viewport) {
			bounds.union(place.geometry.viewport);
		} else {
			bounds.extend(place.geometry.location);
		}
	});
	map.fitBounds(bounds);
});