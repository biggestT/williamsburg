

var venuesLayer, selectControl, map, selectedVenue, zoomLevel;


function onFeatureSelect(feature) {
	var id = '#'+feature.data.id;
	map.setCenter(feature.geometry.getBounds().getCenterLonLat(), zoomLevel);
	$('body').animate({
		scrollTop: $(id).offset().top - paddingTop - 25
	}, 400);
	console.log($(id).offset().top);
	
	console.log(feature);
	var menuItemId = '#link-'+feature.data.id;
	$('.submenu a').removeClass('active');
	$(menuItemId).addClass('active');
}

  
function selectFeature(id) {
	var chosenVenue = venuesLayer.getFeaturesByAttribute('id', id)[0];
	// unselect all venues
	selectControl.unselectAll();
	// select chosen venue on the map
	selectControl.select(chosenVenue);
}

function initMap(options) {

	var osmLayer = new OpenLayers.Layer.OSM("MapQuest",
		[
      "http://otile1.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
      "http://otile2.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
      "http://otile3.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
      "http://otile4.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png"
    ])

	var startLocation = new OpenLayers.LonLat(options.startLocation[0],options.startLocation[1]).transform("EPSG:4326", "EPSG:3857");

	var	unSelectedMarkerStyle = new OpenLayers.Style({
		externalGraphic: options.unselectedGraphic,
		title: '${tooltip}',
		graphicWidth: options.unselectedWidth,
		graphicHeight: options.unselectedHeight
	});


	var selectedMarkerStyle = new OpenLayers.Style({
		externalGraphic: options.selectedGraphic,
		graphicWidth: options.selectedWidth,
		graphicHeight: options.selectedHeight
	});

	venuesLayer = new OpenLayers.Layer.Vector('Overlay', {
		styleMap: new OpenLayers.StyleMap({
			'default': unSelectedMarkerStyle,
			'select': selectedMarkerStyle
		})
	});


	$('.geo-slide-meta').each(function (index) {
		var $this = $(this);
		var olPoint = new OpenLayers.Geometry.Point($this.attr('data-lon'), $this.attr('data-lat')).transform("EPSG:4326", "EPSG:3857");
		var olVector = new OpenLayers.Feature.Vector(olPoint, {tooltip: $this.attr('data-name'), id: $this.attr('id')})
		venuesLayer.addFeatures([olVector]);
	});

	zoomLevel = options.zoomLevel;
	map = new OpenLayers.Map({
		div: 'map', 
    layers: [osmLayer, venuesLayer],
    center: startLocation,
    zoom: options.zoomLevel
  });

  selectControl = new OpenLayers.Control.SelectFeature(venuesLayer, {onSelect: onFeatureSelect});
  map.addControl(selectControl);
  selectControl.activate();

  $('.submenu a').click(function (e){
  	// remove initial hashtag
  	var id = $(this).attr('href').substr(1);
  	selectFeature(id);
  })

  if (location.hash){
  	selectFeature(location.hash.substr(1));
  } else {
  	selectFeature('1');  	
  }
}