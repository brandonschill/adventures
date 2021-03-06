//Initialize map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.8499, lng: -119.5677},
    zoom: 12
  });

  //Grab search box and store in new var
  var input = document.getElementById('pac-input');
 
  //Store search results in new var
  var completed = new google.maps.places.SearchBox(input, null);

  //Bias search results to map's current viewport
  map.addListener('bounds_changed', function() {
    completed.setBounds(map.getBounds());
  });

  var markers = [];
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var labelIndex = 0;

  completed.addListener('places_changed', function() {
    var myPlaces = completed.getPlaces();
    var outerCard = document.createElement('div');
    outerCard.setAttribute('class', 'row small-up-1 medium-up-2 large-up-3');

    //Clear out old markers
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    //For get place, get the icon, name and location
    var bounds = new google.maps.LatLngBounds();
    myPlaces.forEach(function(myPlaces) {
      var icon = {
        url: myPlaces.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      //Create a marker for each place
      markers.push(new google.maps.Marker({
        map: map, 
        label: labels[labelIndex++ % labels.length],
        title: myPlaces.name, 
        position: myPlaces.geometry.location
      }));

      if (myPlaces.geometry.viewport) {
        bounds.union(myPlaces.geometry.viewport);
      } else {
        bounds.extend(myPlaces.geometry.location);
      }
    });
    map.fitBounds(bounds);

    for(var i = 0; i < 10; i++) {

      //Ensure returned objects have photos
      if(myPlaces[i].photos) {

        //Create a new div and assign it a new class
        var innerCard = document.createElement('div');
        innerCard.setAttribute('class', 'column');

        var calloutDiv = document.createElement('div');
        calloutDiv.setAttribute('class', 'callout');

        var hikePhoto = document.createElement('p');
        hikePhoto.setAttribute('class', 'autosize');

        var hikeName = document.createElement('h4');

        //Create variable to hold address for geocoding
        var hikeRating = document.createTextNode('Hike Rating:  ' + myPlaces[i].rating);

        //Create new image element, assign it a source, and assign it a new class
        var newImage = document.createElement('img');
        newImage.setAttribute('src', myPlaces[i].photos[0].getUrl({maxWidth: 333, maxHeight: 333}));
        newImage.className = 'hikephoto';

        //Create a new text node
        var newHikeName = document.createTextNode(myPlaces[i].name);

        //Attach newHikeName(child) to newDiv(parent)
        innerCard.appendChild(newHikeName);

        //Update the text using the object in myPlaces
        var places = document.getElementsByClassName('hikeresults');

        //Attach div to the dom
        places[0].appendChild(outerCard);
        outerCard.appendChild(innerCard);
        innerCard.appendChild(calloutDiv);
        calloutDiv.appendChild(hikePhoto);
        calloutDiv.appendChild(hikeName);
        calloutDiv.appendChild(hikeRating);
        hikePhoto.appendChild(newImage);
        hikeName.appendChild(newHikeName);
        console.log(myPlaces);
      };
    };
  });
};