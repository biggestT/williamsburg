$('#map').ready( function() {


	var apiKey = "AgX3eE4RIEXmpni_wmiIGKtGRtWFcvrgHdZARhqcCiFYGzD78r0q9RcOuix15M5e";
	var map, selectControl, selectedVenue;

	var osmLayer = new OpenLayers.Layer.OSM("MapQuest",
		[
      "http://otile1.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
      "http://otile2.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
      "http://otile3.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png",
      "http://otile4.mqcdn.com/tiles/1.0.0/map/${z}/${x}/${y}.png"
    ])

	var startLocation = new OpenLayers.LonLat(121.4093505859375, 31.243333658561085).transform("EPSG:4326", "EPSG:3857");

	function onPopupClose(evt) {
    selectControl.unselect(selectedVenue);
  }
  function onFeatureSelect(feature) {
    // selectedVenue = feature;
    console.log('selected venue');
    // popup = new OpenLayers.Popup.FramedCloud('venue', feature.geometry.getBounds().getCenterLonLat(), null, 'hej', null, true, onPopupClose);
    // feature.popup = popup;
    // map.addPopup(popup);
  }
  function onFeatureUnselect(feature) {
    console.log('unselected venue');
    // map.removePopup(feature.popup);
    // feature.popup.destroy();
    // feature.popup = null;
  }    

	var venuesLayer = new OpenLayers.Layer.Vector('Overlay', {
		styleMap: new OpenLayers.StyleMap({
			externalGraphic: '../graphic/beanmark.png',
			graphicWidth: 27,
			graphicHeight: 40,
			graphicYOffset: -40,
			title: '${tooltip}'
		})
	});

	var venues = [];
	$('.venue-meta').each(function (index) {
		var $this = $(this);
		var olPoint = new OpenLayers.Geometry.Point($this.attr('data-lon'), $this.attr('data-lat')).transform("EPSG:4326", "EPSG:3857");
		var olVector = new OpenLayers.Feature.Vector(olPoint, {tooltip: 'OpenLayers'})
		venues.push(new Venue (olPoint, olVector, index));
		venuesLayer.addFeatures([olVector]);
	});


	map = new OpenLayers.Map({
		div: 'map', 
    layers: [osmLayer, venuesLayer],
    center: startLocation,
    zoom: 12
  });

	var polygonLayer = new OpenLayers.Layer.Vector("Polygon Layer");
  selectControl = new OpenLayers.Control.SelectFeature(polygonLayer, {onSelect: onFeatureSelect, onUnselect: onFeatureUnselect});
  selectControl.activate();
  map.addControl(selectControl);
  
	console.log(venues);
})

function Venue (olPoint, olVector, index) {
	this.olPoint = olPoint;
	this.olVector = olVector;
	this.index = index;
}