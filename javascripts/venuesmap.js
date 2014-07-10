
var unSelectedMarkerStyle = new OpenLayers.Style({
	externalGraphic: '../graphic/beanmark.png',
	graphicWidth: 27,
	graphicHeight: 40,
	graphicYOffset: -40,
	title: '${tooltip}'
})

var selectedMarkerStyle = new OpenLayers.Style({
	externalGraphic: '../graphic/beanmarker-selected.png',
	graphicWidth: 49,
	graphicHeight: 40
})

var venuesLayer, selectControl;

$('#map').ready( function() {

	var map, selectControl, selectedVenue;

	var osmLayer = new OpenLayers.Layer.OSM("MapQuest",
		[
      "http://otile1.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
      "http://otile2.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
      "http://otile3.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
      "http://otile4.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png"
    ])

	var startLocation = new OpenLayers.LonLat(121.4093505859375, 31.243333658561085).transform("EPSG:4326", "EPSG:3857");

	venuesLayer = new OpenLayers.Layer.Vector('Overlay', {
		styleMap: new OpenLayers.StyleMap({
			'default': unSelectedMarkerStyle,
			'select': selectedMarkerStyle
		})
	});


	$('.venue-meta').each(function (index) {
		var $this = $(this);
		var olPoint = new OpenLayers.Geometry.Point($this.attr('data-lon'), $this.attr('data-lat')).transform("EPSG:4326", "EPSG:3857");
		var olVector = new OpenLayers.Feature.Vector(olPoint, {tooltip: $this.attr('data-name'), id: $this.attr('id')})
		venuesLayer.addFeatures([olVector]);
	});

	map = new OpenLayers.Map({
		div: 'map', 
    layers: [osmLayer, venuesLayer],
    center: startLocation,
    zoom: 12
  });

  selectControl = new OpenLayers.Control.SelectFeature(venuesLayer, {onSelect: onFeatureSelect});
  map.addControl(selectControl);
  selectControl.activate();

  selectFeature('1');

  $('.submenu a').click(function (e){
  	// remove initial hashtag
  	var id = $(this).attr('href').substr(1);
  	selectFeature(id);
  })
  
  function selectFeature(id) {
  	var chosenVenue = venuesLayer.getFeaturesByAttribute('id', id)[0];
  // unselect all venues
  selectControl.unselectAll();
  // select chosen venue on the map
  selectControl.select(chosenVenue);
	}
})

function onFeatureSelect(feature) {
	var id = '#'+feature.data.id;
	$('html, body').animate({
		scrollTop: $(id).offset().top - paddingTop - 25
	}, 400);
	
	var menuItemId = '#link-'+feature.data.id;
	$('.submenu a').removeClass('active');
	$(menuItemId).addClass('active');
}

