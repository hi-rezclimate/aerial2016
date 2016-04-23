var goal = new L.LayerGroup();
  L.marker([52.087466, 5.106728]).bindPopup('stg1goal.').addTo(goal),
  L.marker([51.633399, 3.700630]).bindPopup('stg2goal.').addTo(goal),
  L.marker([50.513931, 5.251338]).bindPopup('stg3goal').addTo(goal),
  L.marker([50.175865, 3.234486]).bindPopup('stg4goal').addTo(goal);
  L.marker([49.888778, 2.295705]).bindPopup('stg5goal').addTo(goal);
  L.marker([49.502927, 0.120688]).bindPopup('stg6goal').addTo(goal);
  L.marker([48.342609, -1.196488]).bindPopup('stg7goal').addTo(goal);
  L.marker([48.228116, -2.998258]).bindPopup('stg8goal').addTo(goal);
  L.marker([47.833321, -2.649112]).bindPopup('stg9goal').addTo(goal);
  L.marker([42.980435, -0.748246]).bindPopup('stg10goal').addTo(goal);
  L.marker([42.891139, -0.113522]).bindPopup('stg11goal').addTo(goal);
  L.marker([42.725569, 1.689130]).bindPopup('stg12goal').addTo(goal);
  L.marker([44.358669, 2.556465]).bindPopup('stg13goal').addTo(goal);
  L.marker([44.500876, 3.529544]).bindPopup('stg14goal').addTo(goal);
  L.marker([44.942055, 4.917982]).bindPopup('stg15goal').addTo(goal);
  L.marker([44.562966, 6.086127]).bindPopup('stg16goal').addTo(goal);
  L.marker([44.369936, 6.601367]).bindPopup('stg17goal').addTo(goal);
  L.marker([45.279182, 6.347334]).bindPopup('stg18goal').addTo(goal);
  L.marker([45.255766, 6.257036]).bindPopup('stg19goal').addTo(goal);
  L.marker([45.092703, 6.071873]).bindPopup('stg20goal').addTo(goal);
  L.marker([48.867109, 2.315993]).bindPopup('stg21goal').addTo(goal);

var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2hvaWNoaSIsImEiOiJjaWY0NmNlcms0bm9tczNsdmJub3k5dmJ3In0.WG3IsTCHM_xhftizTon6Jg';



var streets = L.tileLayer(mbUrl, {
  id: 'mapbox.streets',
  attribution: mbAttr
});

var map = L.map('map', {
  center: [48.867109, 2.315993],
  zoom: 5,
  layers: [streets, goal]
});

var baseLayers = {
  "Streets": streets
};


var overlays = {
  "Goals": goal
};

L.control.layers(baseLayers, overlays).addTo(map);
