// The Basis of this code will base on Citi Bike Actiovity and the City Population Actitvity

// Create the tile layer that will be the background of our map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

console.log(lightmap)


// Initialize all of the LayerGroups we'll be using
var layers = {
    Techtonic_Plates: new L.LayerGroup(),
    Earthquake: new L.LayerGroup(),
  };

  // Create the map with our layers
var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 12,
    layers: [
      layers.Techtonic_Plates,
      layers.Earthquake,
    ]
  });

  // Add our 'lightmap' tile layer to the map
lightmap.addTo(map);
