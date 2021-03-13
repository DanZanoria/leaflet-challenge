// Creat the Map Box and A layer. Will be modified later. 

// The Basis of this code will base on Citi Bike Actiovity and the City Population Actitvity
var myMap = L.map("mapid", {
    center: [40.7128, -74.0060],
    zoom: 13
  });


// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/satellite-v9",
  accessToken: API_KEY
}).addTo(myMap);

// I want custom icons markers. If i can get it to work

var groudonIcon = L.icon({
    iconUrl: 'groudon.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });
  
  var regirockIcon = L.icon({
    iconUrl: 'regirock.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });
  
  var tyranitarIcon = L.icon({
    iconUrl: 'tyranitar.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
  });
  
// Grab the JSon

var EarthquakeJSN = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

// Function to determine a color of the magnitude of the quakes. If i can figure it out, this will be commented to icons
function MagColor(QuakeColor){
    switch(QuakeColor){
        case (0.0 <= QuakeColor && QuakeColor <= 3.0 ):
            return "yellow";
        case (3.0 <= QuakeColor && QuakeColor <= 6.0 ):
            return "magenta";
        case (6.0 <= QuakeColor && QuakeColor <= 9.0 ):
            return "indigo"
        case (9.0 <= QuakeColor && QuakeColor <= 12.0 ):
            return "purple";
        case (12.0 <= QuakeColor && QuakeColor <= 20.0 ):
            return "green"
        default:
            return "red"
    }
};


// Create a function to grab the JSN

d3.json(EarthquakeJSN, function(Quake) {

    // A Variable to create the feature
    var Qfeatures = Quake.features
 
    console.log(Qfeatures)

    var Magnitude = Qfeatures[0].properties.mag
    console.log(Magnitude)

    var locations = Qfeatures[0].geometry.coordinates
    console.log(locations)

    // // Create Circle

    for (var i = 0; i < Qfeatures.length; i++) {

    // Create a circle and pass in some initial options
    function CirclesMar (Qfeatures, latlng) {

    var circleOption = {
        color: MagColor(Magnitude) * 10,
        fillColor: MagColor(Magnitude),
        fillOpacity: 0.75,
        opacity: 1
      }
      return L.circleMarker(latlng, circleOption) }
    
      console.log(CirclesMar)

    // }

}
});