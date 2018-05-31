var pinBuilder = new Cesium.PinBuilder();

var HBFPin = viewer.entities.add({
    name: 'Stuttgart Hauptbahnhof',
    position: Cesium.Cartesian3.fromDegrees(9.182073, 48.784110),
    description: "Stuttgart Hauptbahnhof is the primary railway station in the city of Stuttgart, the state capital of Baden-Württemberg, in southwestern Germany. It is the largest regional and long-distance railway station in Stuttgart, the main node of the Stuttgart S-Bahn network, and, together with the station at Charlottenplatz, it is the main node of the Stuttgart Stadtbahn.",
    billboard: {
        //image : pinBuilder.fromText('Bus', Cesium.Color.BLACK, 48).toDataURL(),
        image: pinBuilder.fromMakiIconId('rail-above', Cesium.Color.GREEN.withAlpha(0.5), 96),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        //heightReference: "CLAMP_TO_GROUND",
        heightReference: "RELATIVE_TO_GROUND",
        show: false
    }
});
var ebikeStationPin = viewer.entities.add({
    name: 'Ebike Station',
    position: Cesium.Cartesian3.fromDegrees(9.177450, 48.781557),
    description: "An Ebike Station Hub - HFT Stuttgart",
    billboard: {
        //image : pinBuilder.fromText('Happy Birthday Nabil!!!!', Cesium.Color.BLACK, 480).toDataURL(),
        image: pinBuilder.fromMakiIconId('bicycle', Cesium.Color.RED.withAlpha(0.5), 96),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        heightReference: "CLAMP_TO_GROUND",
        show: false
    },
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


var hbfLoca = [9.182073, 48.784110, 0];
var hbfDes = "";
var hbfBG = [0, 125, 0, 200];
var hbfTextid = "HBF Stuttgart";

var ebikeStaLoca = [9.177450, 48.781557, 0];
var ebikeStaDes = "";
var ebikeStaBG = [255, 0, 0, 175];
var ebikeStaTextid = "HFT E-Bike Station";

var PublicTransEntity, ebikeStaEntity;
var PublicTransPromise = Cesium.CzmlDataSource.load(GenLabel(hbfLoca, hbfTextid, hbfDes, hbfBG));
PublicTransPromise.then(function (dataSource) {
    viewer.dataSources.add(dataSource);
    PublicTransEntity = dataSource.entities.getById(hbfTextid + '_Label');
    PublicTransEntity.show = false;
});
var ebikeStaPromise = Cesium.CzmlDataSource.load(GenLabel(ebikeStaLoca, ebikeStaTextid, ebikeStaDes, ebikeStaBG));
ebikeStaPromise.then(function (dataSource) {
    viewer.dataSources.add(dataSource);
    ebikeStaEntity = dataSource.entities.getById(ebikeStaTextid + '_Label');
    ebikeStaEntity.show = false;
});


var ShowMapPinPublic = function () {
    HBFPin.billboard.show = true;
    PublicTransEntity.show = true;
    for (let i = 0; i < 64; i++) {
        UbahnEntities[i].billboard.show = true;
    }
    for (let k = 0; k < 6; k++) {
        SbahnEntities[k].billboard.show = true;
    }
}
var HideMapPinPublic = function () {
    HBFPin.billboard.show = false;
    PublicTransEntity.show = false;
    for (let i = 0; i < 64; i++) {
        UbahnEntities[i].billboard.show = false;
    }
    for (let k = 0; k < 9; k++) {
        SbahnEntities[k].billboard.show = false;
    }
}

var ShowBikeRental = function () {
    for (let i = 0; i < 29; i++) {
        BikeRentalEntities[i].billboard.show = true;
    }

}
var HideBikeRental = function () {
    for (let i = 0; i < 29; i++) {
        BikeRentalEntities[i].billboard.show = false;
    }

}
var ShowMapPinCarsharing = function () {
    for (let i = 0; i < 37; i++) {
        ChargingEntities[i].billboard.show = true;
    }
    for (let j = 0; j < 2; j++) {
        C2GbEntities[j].billboard.show = true;
    }
    for (let k = 0; k < 6; k++) {
        StadtCarSEntities[k].billboard.show = true;
    }
}
var HideMapPinCarsharing = function () {
    for (let i = 0; i < 37; i++) {
        ChargingEntities[i].billboard.show = false;
    }
    for (let i = 0; i < 2; i++) {
        C2GbEntities[i].billboard.show = false;
    }
    for (let i = 0; i < 6; i++) {
        StadtCarSEntities[i].billboard.show = false;
    }
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

