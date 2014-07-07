$('#map').ready( function() {


	var apiKey = "AgX3eE4RIEXmpni_wmiIGKtGRtWFcvrgHdZARhqcCiFYGzD78r0q9RcOuix15M5e";
	var map;

	var osmLayer = new OpenLayers.Layer.OSM("MapQuest",
		[
      "http://otile1.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
      "http://otile2.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
      "http://otile3.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
      "http://otile4.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png"
    ])

	var startLocation = new OpenLayers.LonLat(121.4593505859375, 31.243333658561085);
	startLocation.transform("EPSG:4326", "EPSG:3857");


	var venuesLayer = new OpenLayers.Layer.Vector('Overlay', {
		styleMap: new OpenLayers.StyleMap({
			externalGraphic: '../graphic/beanmark.png',
			graphicWidth: 20, graphicHeight: 24, graphicYOffset: -24,
			title: '${tooltip}'
		})
	});

	testVenueLocation = new OpenLayers.LonLat(121.4593505859375, 31.243333658561085);
	testVenueLocation.transform("EPSG:4326", "EPSG:3857");

	venuesLayer.addFeatures([
    new OpenLayers.Feature.Vector(testVenueLocation, {tooltip: 'OpenLayers'})
  ]);

	map = new OpenLayers.Map({
		div: "map", 
    layers: [osmLayer, venuesLayer],
    center: startLocation,
    zoom: 12
  });

	console.log(map);
})
