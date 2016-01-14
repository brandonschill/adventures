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

	var completed = new google.maps.places.Autocomplete(input, null);

	completed.addListener('place_changed', function() {
		console.log(completed.getPlace());
	});
}
