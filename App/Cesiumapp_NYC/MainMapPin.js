var pinBuilder = new Cesium.PinBuilder();

var HBFPin = viewer.entities.add({
    name: 'Redhook',
    position: Cesium.Cartesian3.fromDegrees(-74.009636, 40.678406),
    description: "Red Hook Area B!",
    billboard: {
        //image : pinBuilder.fromText('Bus', Cesium.Color.BLACK, 48).toDataURL(),
        image: pinBuilder.fromMakiIconId('building', Cesium.Color.GREEN.withAlpha(0.5), 96),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        //heightReference: "CLAMP_TO_GROUND",
        heightReference: "RELATIVE_TO_GROUND",
        show: false
    }
});
// ex loca : [9.182073, 48.784110,0]
// ex descriptionText : "<p><a href='http://www.agi.com' target='_blank'>Analytical Graphics, Inc.</a> (AGI) founded Cesium.</p>"
var GenLabel = function (loca, textLabel, descriptionText, bgColor) {
    var czmlGen = [{
        "id": "document",
        "name": "czmlHBF",
        "version": "1.0"
    }, {
        "id": textLabel + '_Label',
        "name": textLabel + '_Label',
        "description": descriptionText,
        "label": {
            "fillColor": {
                "rgba": [255, 255, 255, 255]
            },
            "font": "14pt sans-serif",
            //"horizontalOrigin" : "LEFT",
            "pixelOffset": {
                "cartesian2": [0, -125]
            },
            "backgroundPadding": {
                "cartesian2": [
                    10,
                    5
                ]
            },
            "style": "FILL",
            "text": textLabel,
            "showBackground": true,
            "backgroundColor": {
                "rgba": bgColor
            },
            "heightReference": "CLAMP_TO_GROUND"
        },
        "position": {
            "cartographicDegrees": loca
        },
        "point": {
            "color": {
                "rgba": [255, 0, 0, 255]
            },
            "outlineWidth": 2,
            "pixelSize": 2,
            "heightReference": "CLAMP_TO_GROUND"
        },

    }];
    return czmlGen;
};


var hbfLoca = [-74.009636, 40.678406, 0];
var hbfDes = "";
var hbfBG = [0, 125, 0, 200];
var hbfTextid = "Red Hook";

var PublicTransEntity, ebikeStaEntity;
var PublicTransPromise = Cesium.CzmlDataSource.load(GenLabel(hbfLoca, hbfTextid, hbfDes, hbfBG));
PublicTransPromise.then(function (dataSource) {
    viewer.dataSources.add(dataSource);
    PublicTransEntity = dataSource.entities.getById(hbfTextid + '_Label');
    PublicTransEntity.show = false;
});

var polygon = new Cesium.PolygonGeometry({
    polygonHierarchy : new Cesium.PolygonHierarchy(
      Cesium.Cartesian3.fromDegreesArray([
        -74.009550,40.687388, 
        -73.999164,40.672027, 
        -74.008949,40.669097 ,
        -74.020794, 40.678471
      ])
    )
  });
var geometry = Cesium.PolygonGeometry.createGeometry(polygon);



var ShowMapPinPublic = function () {
    HBFPin.billboard.show = true;
    PublicTransEntity.show = true;
    viewer.scene.camera.flyTo(homeCameraView);
}
var HideMapPinPublic = function () {
    HBFPin.billboard.show = false;
    PublicTransEntity.show = false;
}



//}, 1000);
var ShowMapPinEbike = function () {
    ebikeStationPin.billboard.show = true;
    ebikeStaEntity.show = true;
    //ebikeStationPin.position = Cesium.Cartesian3.fromDegrees(9.177917, 48.782957);
}
var HideMapPinEbike = function () {
    ebikeStationPin.billboard.show = false;
    ebikeStaEntity.show = false;
    //ebikeStationPin.position = Cesium.Cartesian3.fromDegrees(9.177917, 48.782957);
}

