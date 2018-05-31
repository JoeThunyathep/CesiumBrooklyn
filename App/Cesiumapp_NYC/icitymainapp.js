Cesium.BingMapsApi.defaultKey = 'ApOW9LMkerqWIVSnFauilSeaZyp8df66byy1USCTjgTdMvhb4y1iAhEsUHQfCgzq'

var Show2D = false; // Turn to true if want to display without terrain
var Show3D;
if (Show2D) {
    Show3D = false;
    var viewer = new Cesium.Viewer('cesiumContainer', {
        baseLayerPicker: false,
        //scene3DOnly: true
    });
} else {
    Show3D = true;
    var viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider : Cesium.createWorldTerrain(),
        baseLayerPicker: true,
        //scene3DOnly: true,
        //terrainExaggeration: 1.5,
        navigationHelpButton: false,
        selectionIndicator: false,
        shadows: true
    });
    // viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
    //     url: 'https://assets.agi.com/stk-terrain/world',
    //     requestWaterMask: true, // required for water effects
    //     requestVertexNormals: false // required for terrain lighting
    // });
}
// Basic Set Up for the Cesium Globe
viewer.scene.globe.enableLighting = true;
// Basic Set Up for view, 
var initialPosition = new Cesium.Cartesian3.fromDegrees(-74.014957, 40.649173, 1631.082799425431);
// Initial Position of Patricks
//var initialPosition = new Cesium.Cartesian3.fromDegrees(9.1812468, 48.7785923, 1631.082799425431);
var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(7.1077496389876024807, -31.987223091598949054, 0.025883251314954971306);
var homeCameraView = {
    destination: initialPosition,
    orientation: {
        heading: initialOrientation.heading,
        pitch: initialOrientation.pitch,
        roll: initialOrientation.roll
    }
};
// Add some camera flight animation options
homeCameraView.duration = 2.0;
homeCameraView.maximumHeight = 2000;
homeCameraView.pitchAdjustHeight = 2000;
homeCameraView.endTransform = Cesium.Matrix4.IDENTITY;
// Override the default home button
viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
    e.cancel = true;
    viewer.scene.camera.flyTo(homeCameraView);
});
viewer.scene.camera.setView(homeCameraView);
// Set up clock and timeline.
viewer.clock.shouldAnimate = true; // default
viewer.clock.startTime = Cesium.JulianDate.fromIso8601("2017-11-22T13:04:49Z");
viewer.clock.stopTime = Cesium.JulianDate.fromIso8601("2017-11-22T15:00:00Z");
viewer.clock.currentTime = Cesium.JulianDate.fromIso8601("2017-11-22T13:04:49Z");
viewer.clock.multiplier = 0; // sets a speedup
//viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER; // tick computation mode
viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; // loop at the end
viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime); // set visible range

// A Function to turn off terrain
var DestroyView = function () {
    viewer.destroy();
};
////////////////////////////////////////
//Add 3D City DB function to load glTF//
////////////////////////////////////////

var dataLayer;
var city;
////////////////////////////////////////
// Add 3D Citymodel (3D-Tiles)//
////////////////////////////////////////
var tileset;
var addLayers3DT = function () {
    CesiumStyleChoice.style.display = "block";
    // tileset = new Cesium.Cesium3DTileset({ url: Cesium.IonResource.fromAssetId(3839) });
    city = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({ url: Cesium.IonResource.fromAssetId(3839) }));
    var heightOffset = -32;
    city.readyPromise.then(function (tileset) {
        // Position tileset
        var boundingSphere = tileset.boundingSphere;
        var cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center);
        var surface = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0.0);
        var offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, heightOffset);
        var translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
    });
    var defaultStyle = new Cesium.Cesium3DTileStyle({
        color : "color('white', 0.3)",
        show : true
    });
    city.style = defaultStyle;

};

var transparentStyle = new Cesium.Cesium3DTileStyle({
    color: "color('WHITE', 1)",
    show: true
});
var blackStyle = new Cesium.Cesium3DTileStyle({
    color: "color('BLACK', 0.3)",
    show: true
});

var WhiteStyle = new Cesium.Cesium3DTileStyle({
    color: "color('WHITE', 0.7)",
    show: true
});
// Styling depend on the option
var tileStyle = document.getElementById('tileStyle');
function set3DTileStyle() {
    var selectedStyle = tileStyle.options[tileStyle.selectedIndex].value;
    if (selectedStyle === 'none') {
        city.style = transparentStyle;
    } else if (selectedStyle === 'black') {
        city.style = blackStyle;
    } else if (selectedStyle === 'white') {
        city.style = WhiteStyle;
    }
}
tileStyle.addEventListener('change', set3DTileStyle);
var TurnOff3DT = function () {
    city.show = false;
    CesiumStyleChoice.style.display = "none";
}


//////////////////////////////////
// A Function to fly Somewhere////
//////////////////////////////////
var ToStutt = function () {
    viewer.camera.flyTo({
        destination: initialPosition,
        orientation: {
            heading: initialOrientation.heading,
            pitch: initialOrientation.pitch,
            roll: initialOrientation.roll
        }
    });
};


//Add the Polygon NYC Area
var kmlOptions = {
    camera : viewer.scene.camera,
    canvas : viewer.scene.canvas,
    clampToGround : true
};
// Load geocache points of interest from a KML file
// Data from : http://catalog.opendata.city/dataset/pediacities-nyc-neighborhoods/resource/91778048-3c58-449c-a3f9-365ed203e914
var geocachePromise = Cesium.KmlDataSource.load('../ThirdParty/SampleWorkshop/sampleGeocacheLocations.kml', kmlOptions);

// Add geocache billboard entities to scene and style them
geocachePromise.then(function(dataSource) {
    // Add the new data as entities to the viewer
    viewer.dataSources.add(dataSource);

    // Get the array of entities
    var geocacheEntities = dataSource.entities.values;

    for (var i = 0; i < geocacheEntities.length; i++) {
        var entity = geocacheEntities[i];
        if (Cesium.defined(entity.billboard)) {
            // Adjust the vertical origin so pins sit on terrain
            entity.billboard.verticalOrigin = Cesium.VerticalOrigin.BOTTOM;
            // Disable the labels to reduce clutter
            entity.label = undefined;
            // Add distance display condition
            entity.billboard.distanceDisplayCondition = new Cesium.DistanceDisplayCondition(10.0, 20000.0);
            // Compute latitude and longitude in degrees
            var cartographicPosition = Cesium.Cartographic.fromCartesian(entity.position.getValue(Cesium.JulianDate.now()));
            var latitude = Cesium.Math.toDegrees(cartographicPosition.latitude);
            var longitude = Cesium.Math.toDegrees(cartographicPosition.longitude);
            // Modify description
            var description = '<table class="cesium-infoBox-defaultTable cesium-infoBox-defaultTable-lighter"><tbody>' +
                '<tr><th>' + "Longitude" + '</th><td>' + longitude.toFixed(5) + '</td></tr>' +
                '<tr><th>' + "Latitude" + '</th><td>' + latitude.toFixed(5) + '</td></tr>' +
                '</tbody></table>';
            entity.description = description;
        }
    }
});

var geojsonOptions = {
    clampToGround : true
};
// Load neighborhood boundaries from a GeoJson file
// Data from : https://data.cityofnewyork.us/City-Government/Neighborhood-Tabulation-Areas/cpf4-rkhq
var neighborhoodsPromise = Cesium.GeoJsonDataSource.load('../ThirdParty/SampleWorkshop/sampleNeighborhoods.geojson', geojsonOptions);

// Save an new entity collection of neighborhood data
var neighborhoods;
neighborhoodsPromise.then(function(dataSource) {
    // Add the new data as entities to the viewer
    viewer.dataSources.add(dataSource);
    neighborhoods = dataSource.entities;

    // Get the array of entities
    var neighborhoodEntities = dataSource.entities.values;
    for (var i = 0; i < neighborhoodEntities.length; i++) {
        var entity = neighborhoodEntities[i];

        if (Cesium.defined(entity.polygon)) {
            // Use kml neighborhood value as entity name
            entity.name = entity.properties.neighborhood;
            // Set the polygon material to a random, translucent color
            entity.polygon.material = Cesium.Color.fromRandom({
                red : 0.1,
                maximumGreen : 0.5,
                minimumBlue : 0.5,
                alpha : 0.6
            });
            // Tells the polygon to color the terrain. ClassificationType.CESIUM_3D_TILE will color the 3D tileset, and ClassificationType.BOTH will color both the 3d tiles and terrain (BOTH is the default)
            entity.polygon.classificationType = Cesium.ClassificationType.TERRAIN;
            // Generate Polygon center
            var polyPositions = entity.polygon.hierarchy.getValue(Cesium.JulianDate.now()).positions;
            var polyCenter = Cesium.BoundingSphere.fromPoints(polyPositions).center;
            polyCenter = Cesium.Ellipsoid.WGS84.scaleToGeodeticSurface(polyCenter);
            entity.position = polyCenter;
            // Generate labels
            entity.label = {
                text : entity.name,
                showBackground : true,
                scale : 0.6,
                horizontalOrigin : Cesium.HorizontalOrigin.CENTER,
                verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
                distanceDisplayCondition : new Cesium.DistanceDisplayCondition(10.0, 8000.0),
                disableDepthTestDistance : 100.0
            };
        }
    }
});

var TurnOffCensus = function(){
    
    viewer.entities.remove(neighborhoods);
};