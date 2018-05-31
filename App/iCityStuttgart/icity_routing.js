//////////////////////////////////
// Test to add Geojson Request////
//////////////////////////////////
var routeEntities;

var routeService = function () {
    // entity.label.show = true;
    var geojsonOptions = {
        stroke: Cesium.Color.RED,
        fill: Cesium.Color.PINK.withAlpha(0.5),
        strokeWidth: 3,
        clampToGround: true
    };
    const apiK = '58d904a497c67e00015b45fc1512797ef30249a395e53c3b97a807e7';
    var fromPo = [document.getElementById('RouteFromLong').value, document.getElementById('RouteFromLat').value];
    var toPo = [document.getElementById('RouteToLong').value, document.getElementById('RouteToLat').value];
    var fromToPo = fromPo[0] + '%2C' + fromPo[1] + '%7C' + toPo[0] + '%2C' + toPo[1];
    var SENSOR_API_BASE_URL = 'https://api.openrouteservice.org/directions?api_key=' + apiK;
    var SENSOR_API_FINAL_URL =    '&coordinates='+fromToPo +'&profile=cycling-electric&geometry_format=geojson' + 
                                '&elevation=true' + '&instructions_format=html';
    var finalURL = SENSOR_API_BASE_URL + SENSOR_API_FINAL_URL;
    $.getJSON(finalURL, function (geotesta) {
        //console.log(data.value[0].result);
        console.log( "request route success" );
        var routePromise = Cesium.GeoJsonDataSource.load(geotesta["routes"][0]["geometry"], geojsonOptions);
        //var neighborhoods;
        routePromise.then(function (dataSource) {
            // Add the new data as entities to the viewer
            viewer.dataSources.add(dataSource);
            routeEntities = dataSource.entities.values[0];
            routeEntities.name = "Route";
            routeEntities.description =
                "Distance : " + geotesta["routes"][0]["summary"]["distance"] + "m<br>" +
                "Duration : " + geotesta["routes"][0]["summary"]["duration"] + "sec<br>" +
                "Ascent : " + geotesta["routes"][0]["summary"]["ascent"] + "m<br>" +
                "Descent: " + geotesta["routes"][0]["summary"]["descent"] + "m<br>"
                ;
            routeEntities.label = {
                text: "Route",
                showBackground: true,
                scale: 0.6,
                font: '14px monospace',
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                //distanceDisplayCondition : new Cesium.DistanceDisplayCondition(10.0, 8000.0),
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                backgroundPadding: new Cesium.Cartesian2(20, 8),
                pixelOffset: new Cesium.Cartesian2(50, -50),
                backgroundColor: new Cesium.Color(0.0, 0, 0.0, 0.3)
            };
        });
    });

};

var HideRoute = function () {
    routeEntities.show = false;
}
