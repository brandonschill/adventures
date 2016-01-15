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

  //
  completed.addListener('places_changed', function() {
    var myPlaces = completed.getPlaces();
    for(var i = 0; i < myPlaces.length; i++) {

      //Ensure returned objects have photos
      if(myPlaces[i].photos) {

        //Create a new div and assign it a new class
 
        var innerDiv = document.createElement('div');
        innerDiv.setAttribute('class', 'column');

        var calloutDiv = document.createElement('div');
        calloutDiv.setAttribute('class', 'callout');

        var pPhoto = document.createElement('p');

        var pName = document.createElement('p');

        //Create new image element, assign it a source, and assign it a new class
        var newImage = document.createElement('img');
        newImage.setAttribute('src', myPlaces[i].photos[0].getUrl({maxWidth: 333, maxHeight: 333}));
        newImage.className = 'hikephoto';

        //Create a new text node
        var newHikeName = document.createTextNode(myPlaces[i].name);

        //Attach newHikeName(child) to newDiv(parent)
        innerDiv.appendChild(newHikeName);

        //Update the text using the object in myPlaces
        var places = document.getElementsByClassName('hikeresults');

        //Attach div to the dom
        places[0].appendChild(innerDiv);
        innerDiv.appendChild(calloutDiv);
        calloutDiv.appendChild(pPhoto);
        calloutDiv.appendChild(pName);
        pPhoto.appendChild(newImage);
        pName.appendChild(newHikeName);
        console.log(myPlaces);
      };
    };
  });
  };