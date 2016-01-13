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

	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.bindTo('bounds', map);

	var infowindow = new google.maps.InfoWindow();

	var marker = new google.maps.Marker({
		map: map
	});
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});

	autocomplete.addListener('place_changed', function() {
		infowindow.close();
		var place = autocomplete.getPlace();
		if (!place.geometry) {
			return;
		}

		if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
		} else {
			map.setCenter(place.geometry.location);
			map.setZoom(10);
		}

    // Set the position of the marker using the place ID and location.
    marker.setPlace({
    	placeId: place.place_id,
    	location: place.geometry.location
    });
    marker.setVisible(true);

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
    	'Place ID: ' + place.place_id + '<br>' +
    	place.formatted_address);
    infowindow.open(map, marker);
  });
}


// var map;
// var infowindow;

// function initMap() {
//   var yosemite = {lat: 37.8499, lng: -119.5677};

//   map = new google.maps.Map(document.getElementById('map'), {
//     center: yosemite,
//     zoom: 10
//   });

//   infowindow = new google.maps.InfoWindow();

//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch({
//     location: yosemite,
//     radius: 750000,
//     types: ['hiking']
//   }, callback);
// }

// function callback(results, status) {
//   if (status === google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }

// function createMarker(place) {
//   var placeLoc = place.geometry.location;
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }
