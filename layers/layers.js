var wms_layers = [];

var format_tg_manzana_0 = new ol.format.GeoJSON();
var features_tg_manzana_0 = format_tg_manzana_0.readFeatures(json_tg_manzana_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tg_manzana_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tg_manzana_0.addFeatures(features_tg_manzana_0);
var lyr_tg_manzana_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tg_manzana_0, 
                style: style_tg_manzana_0,
                popuplayertitle: "tg_manzana",
                interactive: true,
                title: '<img src="styles/legend/tg_manzana_0.png" /> tg_manzana'
            });
var format_tg_c_hidrante_1 = new ol.format.GeoJSON();
var features_tg_c_hidrante_1 = format_tg_c_hidrante_1.readFeatures(json_tg_c_hidrante_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tg_c_hidrante_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tg_c_hidrante_1.addFeatures(features_tg_c_hidrante_1);
var lyr_tg_c_hidrante_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tg_c_hidrante_1, 
                style: style_tg_c_hidrante_1,
                popuplayertitle: "tg_c_hidrante",
                interactive: true,
                title: '<img src="styles/legend/tg_c_hidrante_1.png" /> tg_c_hidrante'
            });
var format_tg_eje_via_2 = new ol.format.GeoJSON();
var features_tg_eje_via_2 = format_tg_eje_via_2.readFeatures(json_tg_eje_via_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tg_eje_via_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tg_eje_via_2.addFeatures(features_tg_eje_via_2);
var lyr_tg_eje_via_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tg_eje_via_2, 
                style: style_tg_eje_via_2,
                popuplayertitle: "tg_eje_via",
                interactive: true,
                title: '<img src="styles/legend/tg_eje_via_2.png" /> tg_eje_via'
            });

lyr_tg_manzana_0.setVisible(true);lyr_tg_c_hidrante_1.setVisible(true);lyr_tg_eje_via_2.setVisible(true);
var layersList = [lyr_tg_manzana_0,lyr_tg_c_hidrante_1,lyr_tg_eje_via_2];
lyr_tg_manzana_0.set('fieldAliases', {'gid': 'gid', 'cod_sector': 'cod_sector', 'id_ubigeo': 'id_ubigeo', 'id_sector': 'id_sector', 'cod_mzna': 'cod_mzna', 'id_mzna': 'id_mzna', 'area_grafi': 'area_grafi', 'peri_grafi': 'peri_grafi', 'fech_actua': 'fech_actua', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', });
lyr_tg_c_hidrante_1.set('fieldAliases', {'ubigeo': 'ubigeo', 'cod_sector': 'cod_sector', 'tipo': 'tipo', 'cod_tipo': 'cod_tipo', 'create_us': 'create_us', 'create_da': 'create_da', });
lyr_tg_eje_via_2.set('fieldAliases', {'objectid': 'objectid', 'codi_via': 'codi_via', 'id_ubigeo': 'id_ubigeo', 'id_via': 'id_via', 'id_sector': 'id_sector', 'nomb_via': 'nomb_via', 'tipo_via': 'tipo_via', 'peri_grafi': 'peri_grafi', });
lyr_tg_manzana_0.set('fieldImages', {'gid': 'TextEdit', 'cod_sector': 'TextEdit', 'id_ubigeo': 'TextEdit', 'id_sector': 'TextEdit', 'cod_mzna': 'TextEdit', 'id_mzna': 'TextEdit', 'area_grafi': 'TextEdit', 'peri_grafi': 'TextEdit', 'fech_actua': 'DateTime', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', });
lyr_tg_c_hidrante_1.set('fieldImages', {'ubigeo': 'TextEdit', 'cod_sector': 'TextEdit', 'tipo': 'TextEdit', 'cod_tipo': 'TextEdit', 'create_us': 'TextEdit', 'create_da': 'DateTime', });
lyr_tg_eje_via_2.set('fieldImages', {'objectid': 'TextEdit', 'codi_via': 'TextEdit', 'id_ubigeo': 'TextEdit', 'id_via': 'TextEdit', 'id_sector': 'TextEdit', 'nomb_via': 'TextEdit', 'tipo_via': 'TextEdit', 'peri_grafi': 'TextEdit', });
lyr_tg_manzana_0.set('fieldLabels', {'gid': 'no label', 'cod_sector': 'no label', 'id_ubigeo': 'no label', 'id_sector': 'no label', 'cod_mzna': 'no label', 'id_mzna': 'no label', 'area_grafi': 'no label', 'peri_grafi': 'no label', 'fech_actua': 'no label', 'created_us': 'no label', 'created_da': 'no label', 'last_edite': 'no label', 'last_edi_1': 'no label', });
lyr_tg_c_hidrante_1.set('fieldLabels', {'ubigeo': 'no label', 'cod_sector': 'no label', 'tipo': 'no label', 'cod_tipo': 'no label', 'create_us': 'no label', 'create_da': 'no label', });
lyr_tg_eje_via_2.set('fieldLabels', {'objectid': 'no label', 'codi_via': 'no label', 'id_ubigeo': 'no label', 'id_via': 'no label', 'id_sector': 'no label', 'nomb_via': 'no label', 'tipo_via': 'no label', 'peri_grafi': 'no label', });
lyr_tg_eje_via_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});