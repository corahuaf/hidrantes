var style_tg_eje_via_2 = function(feature, resolution) {
    var labelText = feature.get("nomb_via") || ""; // Obtener el texto de la etiqueta
    var labelFont = "9px \'Microsoft New Tai Lue\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var placement = 'line';
    var offsetX = 8;
    var offsetY = 3;

    // Define la escala mínima para mostrar las etiquetas
    var minScaleToShowLabels = 2000; // Ajusta según tus necesidades

    // Calcula la escala actual en función de la resolución
    var scale = resolution * 39.37 * 72;

    // Verifica si la escala actual es menor que la escala mínima para mostrar las etiquetas
    if (scale < minScaleToShowLabels) {
        return [
            new ol.style.Style({
                stroke: new ol.style.Stroke({color: 'rgba(190,207,80,0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
                text: new ol.style.Text({
                    text: labelText,
                    font: labelFont,
                    fill: new ol.style.Fill({color: labelFill}),
                    placement: placement,
                    offsetX: offsetX,
                    offsetY: offsetY,
                    overflow: true // Permite que el texto se desborde fuera del área del símbolo
                })
            })
        ];
    } else {
        return []; // Si la escala es menor que el mínimo, no se muestra ninguna etiqueta
    }
};
