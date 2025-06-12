ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:20935").setExtent([704198.680511, 8765375.978930, 709283.216088, 8768085.257011]);
var wms_layers = [];


        var lyr_Googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'Google satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_New_Kasama_1 = new ol.format.GeoJSON();
var features_New_Kasama_1 = format_New_Kasama_1.readFeatures(json_New_Kasama_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_New_Kasama_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_New_Kasama_1.addFeatures(features_New_Kasama_1);
var lyr_New_Kasama_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_New_Kasama_1, 
                style: style_New_Kasama_1,
                popuplayertitle: 'New_Kasama',
                interactive: true,
                title: '<img src="styles/legend/New_Kasama_1.png" /> New_Kasama'
            });

lyr_Googlesatellitehybrid_0.setVisible(true);lyr_New_Kasama_1.setVisible(true);
var layersList = [lyr_Googlesatellitehybrid_0,lyr_New_Kasama_1];
lyr_New_Kasama_1.set('fieldAliases', {});
lyr_New_Kasama_1.set('fieldImages', {});
lyr_New_Kasama_1.set('fieldLabels', {});
lyr_New_Kasama_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});